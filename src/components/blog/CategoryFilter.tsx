import React from "react";
import Link from "next/link";
import { BlogCategory } from "@/types";

interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory?: string;
  showCount?: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  showCount = true,
}: CategoryFilterProps) => {
  if (categories.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#051438] mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-[#051438] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Posts
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "bg-[#051438] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
            {showCount && (
              <span className="ml-1.5 text-xs opacity-75">
                ({category.count})
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
