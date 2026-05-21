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
export async function mixedToSafeHtml(input: string): Promise<string> {
  try {
    // Pre-process: Convert escaped newlines to actual newlines
    // This handles content from APIs/CMS that may have literal \n strings
    let processedInput = input
      .replace(/\\n/g, '\n')      // Convert \n to actual newlines
      .replace(/\\r\\n/g, '\n')   // Convert \r\n to newlines
      .replace(/\\r/g, '\n')      // Convert \r to newlines
      .replace(/\\t/g, '\t');     // Convert \t to actual tabs

    // Split into lines for better processing
    const lines = processedInput.split('\n');
    const processedLines: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      const prevLine = i > 0 ? lines[i - 1].trim() : '';
      
      // Detect list items (both ordered and unordered) - must start at beginning after trim
      const isOrderedListItem = /^\d+\.\s/.test(trimmedLine);
      const isUnorderedListItem = /^[-*+]\s/.test(trimmedLine);
      const isListItem = isOrderedListItem || isUnorderedListItem;
      
      // Detect if previous line was a list item
      const prevIsOrderedListItem = /^\d+\.\s/.test(prevLine);
      const prevIsUnorderedListItem = /^[-*+]\s/.test(prevLine);
      const prevIsListItem = prevIsOrderedListItem || prevIsUnorderedListItem;
      
      // If current line is a list item and previous line is not empty and not a list item
      // add a blank line before it
      if (isListItem && prevLine !== '' && !prevIsListItem) {
        processedLines.push('');
      }
      
      // Process list items - ensure they start at column 0 with proper spacing
      if (isOrderedListItem || isUnorderedListItem) {
        // Keep the markdown list format - remark will handle the conversion
        const normalizedLine = trimmedLine.replace(/^(\d+)\.(\S)/, '$1. $2').replace(/^([-*+])(\S)/, '$1 $2');
        processedLines.push(normalizedLine);
      } else if (trimmedLine === '') {
        // Preserve blank lines
        processedLines.push('');
      } else {
        // Regular lines - preserve as is
        processedLines.push(line);
      }
    }
    
    processedInput = processedLines.join('\n').replace(/\n{3,}/g, '\n\n');

    // Debug: Log the processed input to see what's being sent to the markdown parser
    if (process.env.NODE_ENV === 'development') {
      console.log('=== PROCESSED INPUT ===');
      console.log(processedInput);
      console.log('=== END PROCESSED INPUT ===');
    }

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
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log('\n===== CLEANING DEBUG =====');
      console.log('Sample before:', htmlOutput.substring(htmlOutput.indexOf('<ol>'), htmlOutput.indexOf('<ol>') + 200));
      console.log('Sample after:', cleanedOutput.substring(cleanedOutput.indexOf('<ol>'), cleanedOutput.indexOf('<ol>') + 200));
      console.log('==========================\n');
    }

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
