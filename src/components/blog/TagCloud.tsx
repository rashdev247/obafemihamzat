import React from "react";
import Link from "next/link";

interface TagCloudProps {
  tags: Array<{ name: string; slug: string; count: number }>;
  activeTag?: string;
}

const TagCloud: React.FC<TagCloudProps> = ({
  tags,
  activeTag,
}: TagCloudProps) => {
  if (tags.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#051438] mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/blog?tag=${tag.slug}`}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTag === tag.slug
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            #{tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
