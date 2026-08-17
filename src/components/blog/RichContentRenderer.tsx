import React from "react";

interface RichContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Component to render rich content (Markdown or HTML)
 * For better Markdown support, you can install react-markdown:
 * npm install react-markdown remark-gfm
 */
const RichContentRenderer: React.FC<RichContentRendererProps> = ({
  content,
  className = "",
}: RichContentRendererProps) => {
  // Check if content looks like HTML
  const isHTML = /<[a-z][\s\S]*>/i.test(content);

  // Simple markdown to HTML converter (basic support)
  const convertMarkdownToHTML = (markdown: string): string => {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

    // Italic
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.+?)_/g, "<em>$1</em>");

    // Links
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );

    // Images
    html = html.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" />',
    );

    // Line breaks
    html = html.replace(/\n\n/g, "</p><p>");
    html = html.replace(/\n/g, "<br />");

    // Wrap in paragraphs
    html = `<p>${html}</p>`;

    // Unordered lists
    html = html.replace(/<p>- (.+?)<\/p>/g, "<ul><li>$1</li></ul>");
    html = html.replace(/<\/ul>\s*<ul>/g, "");

    // Ordered lists
    html = html.replace(/<p>\d+\. (.+?)<\/p>/g, "<ol><li>$1</li></ol>");
    html = html.replace(/<\/ol>\s*<ol>/g, "");

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
    html = html.replace(/`(.+?)`/g, "<code>$1</code>");

    // Blockquotes
    html = html.replace(/<p>&gt; (.+?)<\/p>/g, "<blockquote>$1</blockquote>");

    return html;
  };

  const htmlContent = isHTML ? content : convertMarkdownToHTML(content);

  return (
    <div
      className={`prose prose-lg max-w-none 
        prose-headings:font-bold prose-headings:text-[#051438]
        prose-h1:text-4xl prose-h1:mb-4
        prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-8
        prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-6
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
        prose-li:mb-2
        prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
        prose-img:rounded-lg prose-img:shadow-md
        ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichContentRenderer;
