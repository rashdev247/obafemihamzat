import { escapeHtml, mixedToSafeHtml } from "@/lib/mixedToHtml";
import React, { useEffect, useState } from "react";

interface RichContentRendererProps {
  content: string;
  className?: string;
  contentIsSafeHtml?: boolean;
}

/**
 * Component to render rich content converted by mixedToSafeHtml.
 */
const RichContentRenderer: React.FC<RichContentRendererProps> = ({
  content,
  className = "",
  contentIsSafeHtml = false,
}: RichContentRendererProps) => {
  const [htmlContent, setHtmlContent] = useState(() =>
    contentIsSafeHtml ? content : escapeHtml(content),
  );

  useEffect(() => {
    let isCurrent = true;

    if (contentIsSafeHtml) {
      setHtmlContent(content);
      return;
    }

    setHtmlContent(escapeHtml(content));

    mixedToSafeHtml(content).then((safeHtml) => {
      if (isCurrent) {
        setHtmlContent(safeHtml);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [content, contentIsSafeHtml]);

  return (
    <div
      className={`prose prose-lg max-w-none break-words ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichContentRenderer;
