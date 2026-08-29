import type { BlogCategory, BlogPost, BlogTag } from "@/types";
import { useI18n } from "@/lib/i18n";
import BlogCard from "./BlogCard";
import CustomSelect from "../ui/CustomSelect";
import MultiSelect from "../ui/MultiSelect";
import CustomPagination from "../ui/CustomPagination";
import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

type SortOption = "most-recent" | "oldest" | "title-asc" | "title-desc";

type BlogGridProps = {
  posts: BlogPost[];
  title?: string;
  searchPlaceholder?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};

const BlogGrid = ({
  posts,
  title,
  searchPlaceholder,
  emptyTitle,
  emptyDescription,
}: BlogGridProps) => {
  const { t } = useI18n();
  const router = useRouter();
  const resolvedTitle = title ?? t("blog.allPosts");
  const resolvedSearchPlaceholder = searchPlaceholder ?? t("blog.searchArticles");
  const resolvedEmptyTitle = emptyTitle ?? t("blog.emptyTitle");
  const resolvedEmptyDescription = emptyDescription ?? t("blog.emptyDescription");
  const POSTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState({
    from: 0,
    to: POSTS_PER_PAGE,
  });
  const [sortBy, setSortBy] = useState<SortOption>("most-recent");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);

  useEffect(() => {
    const searchParam = router.query.search;

    if (typeof searchParam === "string") {
      setSearchQuery(searchParam);
      setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
    }
  }, [router.query.search, POSTS_PER_PAGE]);

  // Extract categories and tags from posts
  useEffect(() => {
    // Calculate categories with counts
    const categoryMap = new Map<string, number>();
    posts.forEach((post) => {
      post.categories.forEach((category) => {
        categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
      });
    });

    const categoriesData = Array.from(categoryMap.entries())
      .map(([name, count]) => ({
        id: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        count,
      }))
      .sort((a, b) => b.count - a.count);

    // Calculate tags with counts
    const tagMap = new Map<string, number>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    });

    const tagsData = Array.from(tagMap.entries())
      .map(([name, count]) => ({
        id: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        count,
      }))
      .sort((a, b) => b.count - a.count);

    setCategories(categoriesData);
    setTags(tagsData);
  }, [posts]);

  // Filter posts by categories, tags, and search query
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query),
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((post) =>
        post.categories.some((cat) => selectedCategories.includes(cat)),
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        post.tags.some((tag) => selectedTags.includes(tag)),
      );
    }

    return filtered;
  }, [posts, selectedCategories, selectedTags, searchQuery]);

  // Sort posts based on selected option
  const sortedPosts = useMemo(() => {
    const postsCopy = [...filteredPosts];

    switch (sortBy) {
      case "most-recent":
        return postsCopy.sort(
          (a, b) =>
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime(),
        );
      case "oldest":
        return postsCopy.sort(
          (a, b) =>
            new Date(a.publishedDate).getTime() -
            new Date(b.publishedDate).getTime(),
        );
      case "title-asc":
        return postsCopy.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return postsCopy.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return postsCopy;
    }
  }, [filteredPosts, sortBy]);

  // Calculate paginated posts from sorted posts
  const paginatedPosts = useMemo(() => {
    return sortedPosts.slice(currentPage.from, currentPage.to);
  }, [sortedPosts, currentPage]);

  const handlePagination = ({ from, to }: { from: number; to: number }) => {
    setCurrentPage({ from, to });
    // Scroll to top of blog grid on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value as SortOption);
    // Reset to first page when sort changes
    setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
  };

  const handleCategoryChange = (values: string[]) => {
    setSelectedCategories(values);
    // Reset to first page when filters change
    setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
  };

  const handleTagChange = (values: string[]) => {
    setSelectedTags(values);
    // Reset to first page when filters change
    setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Reset to first page when search changes
    setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchQuery("");
    setCurrentPage({ from: 0, to: POSTS_PER_PAGE });
  };

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex min-h-[52vh] flex-col items-center justify-center rounded-card border border-[rgba(6,59,46,0.12)] bg-white px-4 py-20 text-center shadow-brand-card">
          {/* Empty State Icon */}
          <div className="mb-6">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--campaign-green-700)]"
            >
              <circle
                cx="60"
                cy="60"
                r="60"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <path
                d="M45 40C43.3431 40 42 41.3431 42 43V77C42 78.6569 43.3431 80 45 80H75C76.6569 80 78 78.6569 78 77V52L63 40H45Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M63 40V52H78"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
              <line
                x1="50"
                y1="60"
                x2="70"
                y2="60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
              />
              <line
                x1="50"
                y1="68"
                x2="65"
                y2="68"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Empty State Content */}
          <h2 className="mb-3 font-heading text-2xl font-black text-text-primary md:text-3xl">
            {resolvedEmptyTitle}
          </h2>
          <p className="mb-8 max-w-md text-lg leading-8 text-text-secondary">
            {resolvedEmptyDescription}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="button-lift inline-flex h-12 items-center justify-center rounded-card bg-[var(--campaign-green-900)] px-6 text-sm font-black text-white transition-all duration-300 hover:bg-[var(--campaign-green-700)]"
            >
              {t("blog.backHome")}
            </Link>
            <Link
              href="/join"
              className="button-lift inline-flex h-12 items-center justify-center rounded-card border border-[rgba(6,59,46,0.18)] bg-white px-6 text-sm font-black text-primary-900 transition-all duration-300 hover:border-secondary-500"
            >
              {t("blog.joinMovement")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="mb-6 font-heading text-3xl font-black leading-tight text-[var(--campaign-green-950)] md:text-5xl">
        {resolvedTitle}
      </h1>

      {/* Filters, Sort, Search, and Pagination Row */}
      <div className="mb-10 flex flex-col gap-4 rounded-card p-4 shadow-brand-card lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Search and Filters */}
        <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-1">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[240px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={resolvedSearchPlaceholder}
              className="h-11 w-full rounded-card border border-[rgba(6,59,46,0.14)] bg-bg-primary py-2 pl-10 pr-4 text-sm text-text-primary transition-colors duration-200 placeholder:text-text-muted focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
            />
          </div>

          {/* Category Filter */}
          <MultiSelect
            data={categories.map((cat) => ({
              value: cat.name,
              label: cat.name,
              count: cat.count,
            }))}
            placeholder={t("blog.categories")}
            onChange={handleCategoryChange}
            className="w-full sm:w-[180px]"
          />

          {/* Tag Filter */}
          <MultiSelect
            data={tags.map((tag) => ({
              value: tag.name,
              label: tag.name,
              count: tag.count,
            }))}
            placeholder={t("blog.tags")}
            onChange={handleTagChange}
            className="w-full sm:w-[180px]"
          />

          {/* Sort By */}
          <CustomSelect
            data={[
              {
                label: t("blog.sort.mostRecent"),
                value: "most-recent",
              },
              {
                label: t("blog.sort.oldest"),
                value: "oldest",
              },
              {
                label: t("blog.sort.titleAsc"),
                value: "title-asc",
              },
              {
                label: t("blog.sort.titleDesc"),
                value: "title-desc",
              },
            ]}
            placeholder={t("blog.sort.mostRecent")}
            onChange={handleSortChange}
          />
        </div>

        {/* Right: Pagination */}
        {sortedPosts.length > POSTS_PER_PAGE && (
          <div className="flex w-full justify-end lg:w-auto">
            <CustomPagination
              itemsPerPage={POSTS_PER_PAGE}
              totalItems={sortedPosts.length}
              handlePagination={handlePagination}
            />
          </div>
        )}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts?.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show message if no posts match filters */}
      {paginatedPosts.length === 0 && (
        <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white px-6 py-12 text-center shadow-brand-card">
          <p className="text-lg text-text-secondary">
            {t("blog.noMatches")}
          </p>
          <button
            className="mt-4 text-sm font-black text-[var(--campaign-green-700)] hover:underline"
            onClick={clearAllFilters}
          >
            {t("blog.clearFilters")}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
