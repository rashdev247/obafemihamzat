/**
 * Mixed Content to Safe HTML Converter
 * 
 * This utility converts mixed markdown + raw HTML content to sanitized HTML.
 * It uses the unified ecosystem with remark and rehype plugins to:
 * 1. Parse markdown (including GFM - GitHub Flavored Markdown)
 * 2. Allow embedded raw HTML within markdown
 * 3. Sanitize dangerous HTML/JS to prevent XSS
 * 4. Output clean HTML ready for rendering
 * 
 * Usage:
 *   const safeHtml = await mixedToSafeHtml(rawContent);
 *   <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
 */

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

// Type for sanitization schema
type Schema = typeof defaultSchema;

type MixedToSafeHtmlOptions = {
  /**
   * Detail pages already render the article title outside the body. When the
   * CMS content starts with the same title, remove it before rendering.
   */
  title?: string;
  /**
   * Standalone source URLs copied into CMS fields are usually visual noise.
   * Image URLs are still rendered as images.
   */
  hideStandaloneNonImageUrls?: boolean;
};

const urlOnlyLinePattern = /^(?:https?:\/\/\S+\s*)+$/i;
const bareUrlPattern = /https?:\/\/[^\s<>"']+/gi;
const standaloneMarkdownLinkPattern = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/i;
const imageExtensions = new Set([
  ".apng",
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);

const abbreviationPlaceholders = [
  "Dr.",
  "Mr.",
  "Mrs.",
  "Ms.",
  "Prof.",
  "Hon.",
  "Sen.",
  "Gov.",
  "Dep.",
  "Rep.",
  "St.",
  "Jr.",
  "Sr.",
  "e.g.",
  "i.e.",
];

function normalizeEscapedWhitespace(input: string): string {
  return input
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\\t/g, "\t");
}

function normalizeComparableText(input: string): string {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/^#{1,6}\s+/, "")
    .replace(/\s+/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim()
    .toLowerCase();
}

function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripLeadingDuplicateTitle(input: string, title?: string): string {
  if (!title?.trim()) {
    return input;
  }

  const normalizedTitle = normalizeComparableText(title);
  if (!normalizedTitle) {
    return input;
  }

  const lines = input.split("\n");
  const firstContentIndex = lines.findIndex((line) => line.trim() !== "");

  if (firstContentIndex >= 0) {
    const firstLine = lines[firstContentIndex].trim();
    if (normalizeComparableText(firstLine) === normalizedTitle) {
      lines.splice(firstContentIndex, 1);
      return lines.join("\n").trimStart();
    }
  }

  const titlePattern = escapeRegExp(title.trim()).replace(/\s+/g, "\\s+");
  return input.replace(
    new RegExp(`^\\s*(?:#{1,6}\\s*)?${titlePattern}(?=\\s|$)`, "i"),
    "",
  );
}

function isImageUrl(rawUrl: string): boolean {
  try {
    const url = new URL(rawUrl);
    const extension = url.pathname
      .slice(url.pathname.lastIndexOf("."))
      .toLowerCase();

    return (
      imageExtensions.has(extension) ||
      (url.hostname === "pbs.twimg.com" && url.pathname.includes("/media/")) ||
      url.hostname === "images.openai.com" ||
      url.hostname === "images.ctfassets.net" ||
      url.hostname === "res.cloudinary.com" ||
      url.hostname.endsWith(".blob.core.windows.net")
    );
  } catch {
    return false;
  }
}

function formatStandaloneUrl(
  rawUrl: string,
  hideStandaloneNonImageUrls: boolean,
): string | null {
  const url = rawUrl.trim().replace(/[),.;]+$/, "");

  if (isImageUrl(url)) {
    return `![Article image](<${url}>)`;
  }

  if (hideStandaloneNonImageUrls) {
    return null;
  }

  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    return `[Source: ${hostname}](<${url}>)`;
  } catch {
    return null;
  }
}

function isolateBareUrls(input: string): string {
  return input.replace(bareUrlPattern, (url, offset, value) => {
    const before = value[offset - 1] || "";
    const after = value[offset + url.length] || "";

    if (before === "(" || before === "\"" || before === "'" || before === "<") {
      return url;
    }

    const prefix = before && !/\s/.test(before) ? " " : "";
    const suffix = after && !/\s/.test(after) ? " " : "";

    return `${prefix}\n${url}\n${suffix}`;
  });
}

function protectSentenceAbbreviations(input: string): string {
  return abbreviationPlaceholders.reduce((result, abbreviation, index) => {
    const placeholder = `__ABBR_${index}__`;
    return result.replace(
      new RegExp(escapeRegExp(abbreviation), "g"),
      abbreviation.replace(/\./g, placeholder),
    );
  }, input);
}

function restoreSentenceAbbreviations(input: string): string {
  return abbreviationPlaceholders.reduce((result, abbreviation, index) => {
    const placeholder = `__ABBR_${index}__`;
    return result.replace(
      new RegExp(placeholder, "g"),
      ".",
    );
  }, input);
}

function splitLongArticleText(line: string): string[] {
  const normalizedLine = line.replace(/\s+/g, " ").trim();

  if (normalizedLine.length <= 420) {
    return [normalizedLine];
  }

  const protectedLine = protectSentenceAbbreviations(normalizedLine);
  const sentences = protectedLine
    .replace(/([.!?])\s+(?=(?:["'(\[])?[A-Z0-9])/g, "$1\n")
    .split("\n")
    .map(restoreSentenceAbbreviations)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= 1) {
    return [normalizedLine];
  }

  const paragraphs: string[] = [];
  let current = "";
  let sentenceCount = 0;

  for (const sentence of sentences) {
    const next = current ? `${current} ${sentence}` : sentence;

    if (current && (next.length > 640 || sentenceCount >= 3)) {
      paragraphs.push(current);
      current = sentence;
      sentenceCount = 1;
    } else {
      current = next;
      sentenceCount += 1;
    }
  }

  if (current) {
    paragraphs.push(current);
  }

  return paragraphs;
}

function hasBlockFormatting(input: string): boolean {
  return /(^\s{0,3}#{1,6}\s|^\s{0,3}(?:[-*+]|\d+\.)\s|^\s{0,3}>|```|<\w[\s\S]*>|\|.*\|)/m.test(
    input,
  );
}

function prepareArticleContent(
  input: string,
  options: MixedToSafeHtmlOptions,
): string {
  const hideStandaloneNonImageUrls = options.hideStandaloneNonImageUrls ?? true;
  let processedInput = stripLeadingDuplicateTitle(
    normalizeEscapedWhitespace(input),
    options.title,
  ).trim();

  if (!hasBlockFormatting(processedInput)) {
    processedInput = isolateBareUrls(processedInput);
  }

  const lines = processedInput.split("\n");
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    const prevLine = i > 0 ? lines[i - 1].trim() : "";

    if (!trimmedLine) {
      processedLines.push("");
      continue;
    }

    const markdownLink = trimmedLine.match(standaloneMarkdownLinkPattern);
    if (
      markdownLink &&
      markdownLink[1].trim().toLowerCase() === "image" &&
      isImageUrl(markdownLink[2])
    ) {
      if (processedLines.at(-1) !== "") {
        processedLines.push("");
      }
      processedLines.push(`![Image](<${markdownLink[2]}>)`, "");
      continue;
    }

    if (urlOnlyLinePattern.test(trimmedLine)) {
      const formattedUrls = trimmedLine
        .split(/\s+/)
        .map((url) => formatStandaloneUrl(url, hideStandaloneNonImageUrls))
        .filter((value): value is string => Boolean(value));

      if (formattedUrls.length > 0) {
        if (processedLines.at(-1) !== "") {
          processedLines.push("");
        }
        processedLines.push(...formattedUrls.flatMap((url) => [url, ""]));
      }

      continue;
    }

    const isOrderedListItem = /^\d+\.\s/.test(trimmedLine);
    const isUnorderedListItem = /^[-*+]\s/.test(trimmedLine);
    const isListItem = isOrderedListItem || isUnorderedListItem;

    const prevIsOrderedListItem = /^\d+\.\s/.test(prevLine);
    const prevIsUnorderedListItem = /^[-*+]\s/.test(prevLine);
    const prevIsListItem = prevIsOrderedListItem || prevIsUnorderedListItem;

    if (isListItem && prevLine !== "" && !prevIsListItem) {
      processedLines.push("");
    }

    if (isListItem) {
      processedLines.push(
        trimmedLine
          .replace(/^(\d+)\.(\S)/, "$1. $2")
          .replace(/^([-*+])(\S)/, "$1 $2"),
      );
      continue;
    }

    if (hasBlockFormatting(trimmedLine)) {
      processedLines.push(line);
      continue;
    }

    const paragraphs = splitLongArticleText(trimmedLine);
    processedLines.push(...paragraphs.flatMap((paragraph) => [paragraph, ""]));
  }

  return processedLines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

/**
 * Custom sanitization schema extending the default schema
 * to allow specific HTML elements and attributes while blocking dangerous ones.
 * 
 * Security considerations:
 * - Removes <script> tags
 * - Removes inline event handlers (onclick, onerror, etc.)
 * - Removes javascript: URLs
 * - Removes dangerous attributes like onload, onerror
 * - Allows safe HTML elements for content formatting
 * - Allows images with proper attributes
 * - Blocks <iframe> by default (can be enabled if needed)
 */
const customSchema: Schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    // Allow common attributes on all elements
    "*": [
      ...(defaultSchema.attributes?.["*"] || []),
      "className",
      "class",
      "id",
      "style", // Be cautious with style - may want to remove this
    ],
    // Allow specific attributes on links
    a: [
      ...(defaultSchema.attributes?.a || []),
      "href",
      "title",
      "target",
      "rel",
    ],
    // Allow specific attributes on images
    img: [
      ...(defaultSchema.attributes?.img || []),
      "src",
      "alt",
      "title",
      "width",
      "height",
      "loading",
    ],
    // Allow code block attributes
    code: [
      ...(defaultSchema.attributes?.code || []),
      "className",
      "class",
    ],
    // Allow div and span with class for styling
    div: ["className", "class", "id"],
    span: ["className", "class", "id"],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    // Headers
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Text formatting
    "p",
    "span",
    "div",
    "br",
    "hr",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "del",
    "mark",
    "small",
    "sub",
    "sup",
    // Links and media
    "a",
    "img",
    // Lists
    "ul",
    "ol",
    "li",
    // Tables
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "th",
    "td",
    // Quotes and code
    "blockquote",
    "pre",
    "code",
    // Other
    "details",
    "summary",
    // Uncomment below to allow iframes (use with caution!)
    // "iframe",
  ],
};

/**
 * Converts mixed markdown + HTML content to sanitized HTML
 * 
 * @param input - Raw content string that may contain markdown, HTML, or both
 * @returns Promise<string> - Sanitized HTML string ready for rendering
 * 
 * @example
 * const content = `
 *   # Hello World
 *   <p>This is <strong>mixed</strong> content</p>
 *   - List item 1
 *   - List item 2
 * `;
 * const html = await mixedToSafeHtml(content);
 */
export async function mixedToSafeHtml(
  input: string,
  options: MixedToSafeHtmlOptions = {},
): Promise<string> {
  try {
    const processedInput = prepareArticleContent(input, options);

    const result = await unified()
      // 1. Parse markdown
      .use(remarkParse)
      // 2. Support GitHub Flavored Markdown (tables, strikethrough, task lists, etc.)
      .use(remarkGfm)
      // 3. Convert markdown AST to HTML AST
      // allowDangerousHtml: true lets raw HTML pass through for rehype-raw to parse
      .use(remarkRehype, { allowDangerousHtml: true })
      // 4. Parse raw HTML embedded in markdown
      .use(rehypeRaw)
      // 5. Sanitize to remove dangerous HTML/JS
      .use(rehypeSanitize, customSchema)
      // 6. Convert AST to HTML string
      .use(rehypeStringify)
      .process(processedInput);

    const htmlOutput = String(result);
    
    // Post-process: Remove duplicate list markers with multiple aggressive passes
    let cleanedOutput = htmlOutput;
    
    // Pass 1: Remove number+period right after <li> (no space between)
    cleanedOutput = cleanedOutput.replace(/<li>\d+\.\s+/g, '<li>');
    
    // Pass 2: With whitespace after <li>
    cleanedOutput = cleanedOutput.replace(/<li>\s+\d+\.\s+/g, '<li>');
    
    // Pass 3: Global replacement - any digit+period+space inside <li> content (first 50 chars)
    cleanedOutput = cleanedOutput.replace(/<li>([^<]{0,50}?)(\d+)\.\s+/g, (match, prefix) => {
      // Only strip if prefix doesn't contain other numbers (to avoid breaking real content)
      if (!/\d/.test(prefix)) {
        return '<li>' + prefix;
      }
      return match;
    });
    
    // Pass 4: Unordered list markers
    cleanedOutput = cleanedOutput.replace(/<li>\s*[-*+]\s+/g, '<li>');
    
    // Pass 5: Nuclear option - scan each <li> and remove leading number pattern
    cleanedOutput = cleanedOutput.replace(/<li>([^<]*?)<\/li>/g, (match, content) => {
      // Remove leading number+period+space from content
      const cleaned = content.replace(/^\s*\d+\.\s+/, '');
      return '<li>' + cleaned + '</li>';
    });
    
    // Pass 6: For multiline <li> content
    cleanedOutput = cleanedOutput.replace(/<li>([\s\S]*?)<\/li>/g, (match, content) => {
      // Only clean if content starts with number pattern in first 30 chars
      if (/^\s{0,10}\d+\.\s/.test(content)) {
        const cleaned = content.replace(/^\s*\d+\.\s+/, '');
        return '<li>' + cleaned + '</li>';
      }
      return match;
    });
    
    return cleanedOutput;
  } catch (error) {
    console.error("Error converting mixed content to HTML:", error);
    // Return escaped content as fallback to prevent XSS
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

/**
 * Synchronous version with basic HTML escaping (use as fallback only)
 * For production, always use the async mixedToSafeHtml function.
 * 
 * @param input - Raw content string
 * @returns Escaped HTML string
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Optional: Client-side additional sanitization using DOMPurify
 * This can be used as a second layer of defense on the client side.
 * 
 * Usage:
 *   import { sanitizeHtmlClient } from '@/lib/mixedToHtml';
 *   const clean = sanitizeHtmlClient(html);
 * 
 * Note: This requires 'isomorphic-dompurify' package
 */
export async function sanitizeHtmlClient(html: string): Promise<string> {
  // Only run on client side
  if (typeof window === "undefined") {
    return html;
  }

  try {
    // Dynamic import for client-side only
    const { default: DOMPurify } = await import("isomorphic-dompurify");
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "div",
        "br",
        "hr",
        "a",
        "img",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "del",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
      ],
      ALLOWED_ATTR: [
        "href",
        "src",
        "alt",
        "title",
        "class",
        "className",
        "id",
        "target",
        "rel",
        "width",
        "height",
        "loading",
      ],
      ALLOW_DATA_ATTR: false,
    });
  } catch (error) {
    console.error("DOMPurify sanitization error:", error);
    return html;
  }
}
