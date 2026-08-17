import type { BlogPost } from "@/types";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  const authorName =
    typeof post.author === "string"
      ? post.author
      : post.author?.name || "Anonymous";
  const postDate =
    (post as BlogPost & { date?: string }).date ||
    post.publishedDate ||
    new Date().toISOString();
  const postSlug = post.slug || `${post.id}`;
  const postUrl = `/news/${postSlug}`;

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <motion.div
      className="cursor-pointer overflow-hidden rounded-card bg-transparent text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
    >
      <Link href={postUrl} className="relative block h-[290px] w-full cursor-pointer">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-card object-cover"
        />
        {post.featured && (
          <div className="absolute left-3 top-3 rounded-card bg-secondary-500 px-3 py-1 text-xs font-black text-primary-900">
            Featured
          </div>
        )}
        {post.pinned && (
          <div className="absolute right-3 top-3 rounded-card bg-[var(--campaign-green-900)] p-2 text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
            </svg>
          </div>
        )}
      </Link>

      <motion.div
        className="space-y-3 sm:space-y-2"
        onClick={() => router.push(postUrl)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-black text-[var(--campaign-green-700)]">
            {authorName} &bull; {formatDate(postDate)}
          </p>
          {post.readTime && (
            <div className="flex items-center text-xs text-text-muted">
              <Clock className="mr-1 h-3 w-3" />
              {post.readTime} min
            </div>
          )}
        </div>

        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.categories.slice(0, 2).map((category, idx) => (
              <span
                key={idx}
                className="rounded-card bg-[var(--lagos-sky)] px-2 py-1 text-xs font-semibold text-[var(--campaign-green-700)]"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <h2 className="font-heading text-xl font-black text-text-primary">
            {post.title}
          </h2>
          <ArrowRight className="hidden shrink-0 text-text-primary sm:block" />
        </div>
        <p className="line-clamp-3 text-[1rem] font-medium leading-7 text-text-secondary">
          {post.description}
        </p>

        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            router.push(postUrl);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-lift flex h-[41px] cursor-pointer items-center justify-center rounded-card border border-[rgba(6,59,46,0.18)] bg-white px-4 text-sm font-black text-[var(--campaign-green-700)] transition-all duration-300 hover:border-secondary-500 sm:hidden"
        >
          Read now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
