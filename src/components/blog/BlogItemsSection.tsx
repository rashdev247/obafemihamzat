import { languageLocaleMap, useI18n } from "@/lib/i18n";
import { containerVariants, itemVariants } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface BlogItemsSectionProps {
  posts: BlogPost[];
}

const getAuthorName = (post: BlogPost) =>
  typeof post.author === "string" ? post.author : post.author.name;

const formatDate = (dateString: string, locale: string) => {
  try {
    return new Date(dateString).toLocaleDateString(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

const getPostUrl = (post: BlogPost) => `/news/${post.slug || post.id}`;

const BlogItemsSection: React.FC<BlogItemsSectionProps> = ({ posts }) => {
  const { language, t } = useI18n();
  const locale = languageLocaleMap[language];
  const recentPosts = useMemo(() => {
    return [...posts]
      .sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime(),
      )
      .slice(0, 3);
  }, [posts]);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-bg-primary px-6 py-20">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-black leading-tight text-[var(--campaign-green-950)] md:text-4xl">
          {t("blog.recentPosts")}
        </h2>

        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-start"
        >
          {recentPosts[0] && (
            <motion.article variants={itemVariants}>
              <Link href={getPostUrl(recentPosts[0])} className="group block">
                <div className="relative h-[288px] overflow-hidden rounded-card bg-primary-900 sm:h-[320px]">
                  <Image
                    src={recentPosts[0].imageUrl}
                    alt={recentPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-5 text-sm font-black text-[var(--campaign-green-700)]">
                  {getAuthorName(recentPosts[0])} &bull;{" "}
                  {formatDate(recentPosts[0].publishedDate, locale)}
                </p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="max-w-3xl font-heading text-2xl font-black leading-tight text-text-primary transition-colors duration-300 group-hover:text-[var(--campaign-green-700)]">
                    {recentPosts[0].title}
                  </h3>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--campaign-green-700)]"
                  />
                </div>
                <p className="mt-3 line-clamp-2 max-w-2xl text-base font-medium leading-7 text-text-secondary">
                  {recentPosts[0].description}
                </p>
              </Link>
            </motion.article>
          )}

          <div className="grid gap-8">
            {recentPosts.slice(1, 3).map((post) => (
              <motion.article key={post.id} variants={itemVariants}>
                <Link
                  href={getPostUrl(post)}
                  className="group grid gap-5 md:grid-cols-[minmax(250px,0.95fr)_minmax(0,1fr)] md:items-start"
                >
                  <div className="relative h-[210px] overflow-hidden rounded-card bg-primary-900">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-black text-[var(--campaign-green-700)]">
                      {getAuthorName(post)} &bull;{" "}
                      {formatDate(post.publishedDate, locale)}
                    </p>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <h3 className="font-heading text-[18px] font-black leading-tight text-text-primary transition-colors duration-300 group-hover:text-[var(--campaign-green-700)] md:text-[1.55rem]">
                        {post.title}
                      </h3>
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--campaign-green-700)]"
                      />
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-text-secondary">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogItemsSection;
