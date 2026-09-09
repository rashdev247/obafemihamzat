import BlogCard from "@/components/blog/BlogCard";
import DisqusComments from "@/components/blog/DisqusComments";
import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  AnswerEngineSection,
  CampaignCTA,
} from "@/components/campaign/CampaignPrimitives";
import Title from "@/components/shared/Title";
import { campaignSite } from "@/data/campaignContent";
import {
  buildArticleAnswerQuestions,
  buildArticleAnswerSummary,
  generateFAQPageSchemaNode,
  generateSpeakableSpecification,
} from "@/lib/aeo";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/codaService";
import { mixedToSafeHtml } from "@/lib/mixedToHtml";
import {
  SITE_IMAGE,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
  buildBlogPostKeywordList,
  getStructuredDataTopics,
  normalizeKeywords,
} from "@/lib/seo";
import type { BlogPost } from "@/types";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
  User,
} from "lucide-react";

interface Props {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
  processedContent: string;
  fullUrl: string;
}

const ensureAbsoluteUrl = (url: string) => {
  if (!url) return SITE_IMAGE;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${SITE_URL}${url}`;
  return `${SITE_URL}/${url}`;
};

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};

const BlogDetailPage: React.FC<Props> = ({
  post,
  relatedPosts,
  processedContent,
  fullUrl,
}) => {
  const router = useRouter();

  if (!post) {
    return (
      <CampaignLayout>
        <Head>
          <title>News post not found | {campaignSite.shortName}</title>
          <meta
            name="description"
            content="No news post matches this campaign update URL."
          />
        </Head>
        <main className="min-h-screen bg-bg-primary px-6 pb-20 pt-32">
          <Title text="News post not found" />
          <div className="container mx-auto rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-8 text-center shadow-brand-card">
            <h1 className="font-heading text-4xl font-black text-text-primary">
              News post not found
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              No campaign update matches this URL.
            </p>
            <button
              type="button"
              onClick={() => router.push("/news")}
              className="button-lift mt-8 cursor-pointer inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
            >
              Back to news
            </button>
          </div>
        </main>
      </CampaignLayout>
    );
  }

  const authorName =
    typeof post.author === "string"
      ? post.author
      : post.author?.name || "Campaign Team";
  const authorAvatar =
    typeof post.author !== "string" ? post.author?.avatar : undefined;
  const postDate =
    (post as BlogPost & { date?: string }).date ||
    post.publishedDate ||
    new Date().toISOString();
  const shareUrl = fullUrl || `${SITE_URL}/news/${post.slug}`;
  const shareText = `Read this campaign update: ${post.title}`;
  const seoTitle = post.seo?.title || post.title;
  const seoDescription = post.seo?.description || post.description;
  const seoImage = ensureAbsoluteUrl(post.seo?.ogImage || post.imageUrl);
  const canonicalUrl = `${SITE_URL}/news/${post.slug}`;
  const keywordList = buildBlogPostKeywordList(post);
  const keywords = normalizeKeywords(keywordList);
  const structuredTopics = getStructuredDataTopics(keywordList, 48);
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = post.readTime || Math.ceil(wordCount / 200);
  const articleAnswerSummary = buildArticleAnswerSummary(post);
  const articleAnswerQuestions = buildArticleAnswerQuestions(
    post,
    authorName,
    canonicalUrl,
  );
  const articleSpeakable = generateSpeakableSpecification([
    "#article-answers",
    ".aeo-summary",
    ".news-article-body",
  ]);
  const articleFAQSchema = generateFAQPageSchemaNode(articleAnswerQuestions, {
    id: `${canonicalUrl}#faq`,
    url: canonicalUrl,
    name: `${post.title} questions and answers`,
    inLanguage: SITE_LANGUAGE,
  });
  const articleAnswerEngine = {
    summary: articleAnswerSummary,
    questions: articleAnswerQuestions,
    speakableSelectors: ["#article-answers", ".aeo-summary"],
  };

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }

    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <CampaignLayout>
      <Head>
        <title>{seoTitle} | {campaignSite.shortName}</title>
        <meta name="title" content={`${seoTitle} | ${campaignSite.shortName}`} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={authorName} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang={SITE_LANGUAGE} href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:image:secure_url" content={seoImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:locale" content={SITE_LOCALE} />
        <meta property="article:published_time" content={post.publishedDate} />
        {post.updatedDate && (
          <meta property="article:modified_time" content={post.updatedDate} />
        )}
        <meta property="article:author" content={authorName} />
        {post.categories.map((category) => (
          <meta
            key={`article-section-${category}`}
            property="article:section"
            content={category}
          />
        ))}
        {post.tags?.map((tag) => (
          <meta key={`article-tag-${tag}`} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={seoImage} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${readingTime} min read`} />
        <meta name="twitter:label2" content="Written by" />
        <meta name="twitter:data2" content={authorName} />
        <meta name="theme-color" content="#063b2e" />
        <script
          key="news-article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: post.title,
              abstract: articleAnswerSummary,
              description: post.description,
              image: seoImage,
              datePublished: post.publishedDate,
              dateModified: post.updatedDate || post.publishedDate,
              author: {
                "@type": "Person",
                name: authorName,
              },
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                logo: {
                  "@type": "ImageObject",
                  url: SITE_LOGO,
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl,
              },
              articleSection: post.categories.join(", "),
              keywords,
              about: [
                {
                  "@type": "Person",
                  name: SITE_NAME,
                  url: SITE_URL,
                },
                ...post.categories.map((category) => ({
                  "@type": "Thing",
                  name: category,
                })),
                ...structuredTopics,
              ],
              mentions: structuredTopics,
              wordCount,
              timeRequired: `PT${readingTime}M`,
              ...(articleSpeakable && {
                speakable: articleSpeakable,
              }),
              inLanguage: SITE_LANGUAGE,
            }),
          }}
        />
        {articleFAQSchema && (
          <script
            key="news-faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                ...articleFAQSchema,
              }),
            }}
          />
        )}
      </Head>

      <main className="min-h-screen overflow-hidden bg-bg-primary">
        <Title text={`Obafemi Hamzat - ${post.title}`} />

        <article className="px-6 pb-20 pt-32">
          <div className="container mx-auto">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <Link href="/" className="font-semibold hover:text-primary-900">
                Home
              </Link>
              <span>/</span>
              <Link href="/news" className="font-semibold hover:text-primary-900">
                News
              </Link>
              <span>/</span>
              <span className="max-w-full truncate text-text-primary font-medium">
                {post.title}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => router.push("/news")}
              className="mb-8 inline-flex cursor-pointer h-11 items-center gap-2 rounded-card px-4 text-sm font-black text-primary-900 transition-all duration-300"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to news
            </button>

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                {post.categories && post.categories.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Link
                        key={category}
                        href={`/news?category=${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="rounded-card bg-[var(--lagos-sky)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--campaign-green-700)]"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
                <h1 className="font-heading text-4xl font-black leading-tight text-[var(--campaign-green-950)] md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-text-secondary md:text-lg">
                  {post.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[rgba(6,59,46,0.12)] pt-6 text-sm text-text-secondary md:gap-6">
                  <div className="flex items-center gap-2">
                    {authorAvatar ? (
                      <Image
                        src={authorAvatar}
                        alt={authorName}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lagos-sky)]">
                        <User className="h-5 w-5 text-[var(--campaign-green-700)]" />
                      </div>
                    )}
                    <span className="font-black text-text-primary">
                      {authorName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(postDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime} min read</span>
                  </div>
                </div>
              </div>

              <div className="interactive-card relative h-[360px] overflow-hidden rounded-card bg-primary-900 shadow-brand-card md:h-[460px]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/74 via-transparent to-transparent" />
                {post.featured && (
                  <div className="absolute left-4 top-4 rounded-card bg-secondary-500 px-4 py-2 text-sm font-black text-primary-900">
                    Featured Article
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* <AnswerEngineSection
          id="article-answers"
          label="Fast facts"
          title="Quick answers"
          content={articleAnswerEngine}
        /> */}

        <section className="bg-white px-6 py-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="news-article-body prose prose-lg prose-slate max-w-none rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-6 shadow-brand-card">
              <div dangerouslySetInnerHTML={{ __html: processedContent }} />
            </article>

            <aside className="space-y-4">
              <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5">
                <div className="flex items-center gap-2 text-sm font-black text-text-primary">
                  <Share2 className="h-4 w-4 text-[var(--campaign-green-700)]" />
                  Share this update
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleShare("facebook")}
                    className="button-lift flex h-11 items-center justify-center rounded-card bg-[#1877f2] text-white"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShare("twitter")}
                    className="button-lift flex h-11 items-center justify-center rounded-card bg-[#0f172a] text-white"
                    aria-label="Share on X"
                  >
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShare("linkedin")}
                    className="button-lift flex h-11 items-center justify-center rounded-card bg-[#0a66c2] text-white"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--campaign-green-700)]">
                  About the author
                </p>
                <h2 className="mt-3 font-heading text-2xl font-black text-text-primary">
                  {authorName}
                </h2>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Campaign updates and public service dispatches from the
                  Obafemi Hamzat 2027 movement.
                </p>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--campaign-green-700)]">
                    Tags
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/news?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                        className="rounded-card bg-white px-3 py-1 text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-primary-900"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <DisqusComments
          identifier={`news-${post.slug}`}
          title={post.title}
          url={canonicalUrl}
        />

        {relatedPosts.length > 0 && (
          <section className="bg-bg-primary px-6 pt-10 pb-20">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--campaign-green-700)]">
                  Keep reading
                </p>
                <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--campaign-green-950)] md:text-5xl">
                  Related news
                </h2>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params || {};

  if (!slug || typeof slug !== "string") {
    return {
      props: {
        post: null,
        relatedPosts: [],
        processedContent: "",
        fullUrl: "",
      },
    };
  }

  const protocol = context.req.headers["x-forwarded-proto"] || "https";
  const host = context.req.headers.host || "drobafemihamzat.vercel.app";
  const fullUrl = `${protocol}://${host}/news/${slug}`;

  let post: BlogPost | null = null;
  let relatedPosts: BlogPost[] = [];
  let processedContent = "";

  try {
    post = await getBlogPostBySlug(slug);

    if (post) {
      relatedPosts = await getRelatedPosts(post.id, 3);
      processedContent = await mixedToSafeHtml(post.content);
    }
  } catch (error) {
    console.error("Error fetching news post:", error);
  }

  return {
    props: {
      post,
      relatedPosts,
      processedContent,
      fullUrl,
    },
  };
};

export default BlogDetailPage;
