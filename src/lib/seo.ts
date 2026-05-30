/**
 * SEO utilities for the Obafemi Hamzat website
 * 
 * This file contains helper functions for generating SEO-optimized content,
 * structured data, and meta tags for the blog.
 */

import { BlogPost } from "@/types";

export const SITE_URL = "https://drobafemihamzat.vercel.app";
export const SITE_NAME = "Dr. Kadri Obafemi Hamzat";
export const SITE_TITLE =
  "Kadri Obafemi Hamzat 2027 | APC Lagos Governorship Candidate";
export const SITE_DESCRIPTION =
  "Official campaign platform for Dr. Kadri Obafemi Hamzat, APC candidate for Lagos Governor 2027, with vision, achievements, news, and volunteer updates.";
export const SITE_IMAGE = `${SITE_URL}/og-image.png`;
export const SITE_LOGO = `${SITE_URL}/logo.webp`;
export const SITE_LANGUAGE = "en-NG";
export const SITE_LOCALE = "en_NG";
export const SITE_THEME_COLOR = "#063b2e";
export const SITE_KEYWORDS = [
  "Kadri Obafemi Hamzat",
  "Obafemi Hamzat",
  "Hamzat 2027",
  "Lagos 2027",
  "Lagos governorship election",
  "APC Lagos",
  "Deputy Governor of Lagos State",
  "For A Greater Lagos",
  "Greater Lagos",
  "Lagos governance",
  "Lagos infrastructure",
  "Digital Lagos",
];

type BreadcrumbItem = {
  name: string;
  url: string;
};

type CampaignPageSchemaInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function toAbsoluteUrl(pathOrUrl: string = "/"): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/")
    ? pathOrUrl
    : `/${pathOrUrl}`;

  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}

export function normalizeKeywords(keywords: string[] = SITE_KEYWORDS): string {
  return Array.from(new Set(keywords.map((keyword) => keyword.trim()).filter(Boolean))).join(
    ", "
  );
}

export function generateCampaignPageSchema({
  title,
  description,
  url,
  image = SITE_IMAGE,
  breadcrumbs,
}: CampaignPageSchemaInput) {
  const pageBreadcrumbs =
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { name: "Home", url: toAbsoluteUrl("/") },
          { name: title, url },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: toAbsoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: SITE_LANGUAGE,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: ["Obafemi Hamzat", "KOH"],
        url: toAbsoluteUrl("/"),
        image: SITE_LOGO,
        jobTitle: "Deputy Governor of Lagos State",
        worksFor: {
          "@type": "GovernmentOrganization",
          name: "Lagos State Government",
        },
        memberOf: {
          "@type": "PoliticalParty",
          name: "All Progressives Congress",
        },
        sameAs: ["https://www.obafemihamzat.com/"],
        knowsAbout: [
          "Lagos State governance",
          "public service reform",
          "digital transformation",
          "infrastructure delivery",
          "education policy",
          "healthcare access",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#campaign`,
        name: "Obafemi Hamzat 2027 Campaign Movement",
        url: toAbsoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: SITE_LOGO,
        },
        founder: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        inLanguage: SITE_LANGUAGE,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: pageBreadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  };
}

/**
 * Generate SEO-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .substring(0, 100); // Limit length
}

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate optimal meta description
 * Length: 150-160 characters for best SEO
 */
export function generateMetaDescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at word boundary
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}

/**
 * Generate SEO-optimized title
 * Length: 50-60 characters for best SEO
 */
export function generateSEOTitle(
  title: string,
  siteName: string = SITE_NAME,
  maxLength: number = 60
): string {
  const fullTitle = `${title} | ${siteName}`;
  
  if (fullTitle.length <= maxLength) {
    return fullTitle;
  }
  
  // Truncate title, not site name
  const availableLength = maxLength - siteName.length - 3; // 3 for " | "
  const truncatedTitle = title.substring(0, availableLength);
  const lastSpace = truncatedTitle.lastIndexOf(" ");
  
  return lastSpace > 0
    ? `${truncatedTitle.substring(0, lastSpace)}... | ${siteName}`
    : `${truncatedTitle}... | ${siteName}`;
}

/**
 * Extract keywords from content and tags
 */
export function extractKeywords(
  post: BlogPost,
  maxKeywords: number = 10
): string {
  const keywords = new Set<string>();
  
  // Add existing tags
  post.tags.forEach(tag => keywords.add(tag.toLowerCase()));
  
  // Add categories
  post.categories.forEach(cat => keywords.add(cat.toLowerCase()));
  
  // Extract common words from title (optional)
  const titleWords = post.title
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 4); // Only words longer than 4 chars
  
  titleWords.forEach(word => {
    if (keywords.size < maxKeywords) {
      keywords.add(word);
    }
  });
  
  return Array.from(keywords).slice(0, maxKeywords).join(", ");
}

/**
 * Generate Open Graph image URL with fallback
 */
export function getOGImage(post: BlogPost): string {
  return post.seo?.ogImage || 
         post.imageUrl || 
         SITE_IMAGE;
}

/**
 * Generate canonical URL for blog post
 */
export function getCanonicalUrl(slug: string, baseUrl: string = SITE_URL): string {
  return `${baseUrl}/blog/${slug}`;
}

/**
 * Format date for schema.org (ISO 8601)
 */
export function formatSchemaDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate Article schema for blog post
 */
export function generateArticleSchema(
  post: BlogPost,
  authorName: string,
  canonicalUrl: string,
  relatedPosts: BlogPost[] = []
) {
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = post.readTime || calculateReadingTime(post.content);
  const keywords = post.seo?.keywords || extractKeywords(post);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: post.imageUrl,
      width: 1200,
      height: 630
    },
    datePublished: formatSchemaDate(post.publishedDate),
    dateModified: formatSchemaDate(post.updatedDate || post.publishedDate),
    author: {
      "@type": "Person",
      name: authorName,
      url: `${SITE_URL}/authors/${authorName.toLowerCase().replace(/\s+/g, '-')}`
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      image: {
        "@type": "ImageObject",
        url: SITE_LOGO,
        width: 1024,
        height: 1024
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    articleSection: post.categories.join(", "),
    keywords: keywords,
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: SITE_LANGUAGE,
    ...(post.categories.length > 0 && {
      about: post.categories.map(cat => ({
        "@type": "Thing",
        name: cat
      }))
    }),
    ...(relatedPosts.length > 0 && {
      relatedLink: relatedPosts.map(rp => 
        `${SITE_URL}/blog/${rp.slug}`
      )
    })
  };
}

/**
 * Generate ItemList schema for blog listing
 */
export function generateBlogListSchema(posts: BlogPost[]) {
  return {
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title
    }))
  };
}

/**
 * Sanitize and validate URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.toString();
  } catch {
    return SITE_URL;
  }
}

/**
 * Get estimated reading time in human-readable format
 */
export function getReadingTimeText(minutes: number): string {
  if (minutes < 1) return "Less than a minute";
  if (minutes === 1) return "1 minute";
  return `${minutes} minutes`;
}

/**
 * Generate Twitter card meta tags
 */
export function generateTwitterCardMeta(
  title: string,
  description: string,
  image: string,
  url: string
) {
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:url": url
  };
}

/**
 * Generate Open Graph meta tags
 */
export function generateOGMeta(
  title: string,
  description: string,
  image: string,
  url: string,
  type: string = "article"
) {
  return {
    "og:type": type,
    "og:site_name": SITE_NAME,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:url": url,
    "og:locale": SITE_LOCALE
  };
}

/**
 * Check if content needs SEO optimization warnings
 */
export function checkSEOScore(post: BlogPost): {
  score: number;
  warnings: string[];
  suggestions: string[];
} {
  const warnings: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  // Check title length
  if (post.title.length < 30) {
    warnings.push("Title is too short (recommended: 30-60 characters)");
    score -= 10;
  } else if (post.title.length > 60) {
    warnings.push("Title is too long (recommended: 30-60 characters)");
    score -= 5;
  }

  // Check description length
  if (post.description.length < 120) {
    warnings.push("Description is too short (recommended: 120-160 characters)");
    score -= 10;
  } else if (post.description.length > 160) {
    warnings.push("Description is too long (recommended: 120-160 characters)");
    score -= 5;
  }

  // Check for SEO fields
  if (!post.seo?.title) {
    suggestions.push("Consider adding a custom SEO title");
    score -= 5;
  }

  if (!post.seo?.keywords && post.tags.length === 0) {
    warnings.push("No keywords or tags defined");
    score -= 10;
  }

  if (post.categories.length === 0) {
    warnings.push("No categories assigned");
    score -= 5;
  }

  // Check content length
  const wordCount = post.content.split(/\s+/).length;
  if (wordCount < 300) {
    warnings.push("Content is too short (recommended: 300+ words)");
    score -= 15;
  }

  if (!post.imageUrl) {
    warnings.push("No featured image set");
    score -= 10;
  }

  return { score: Math.max(0, score), warnings, suggestions };
}

/**
 * Generate sitemap entry for blog post
 */
export function generateSitemapEntry(post: BlogPost) {
  return {
    url: `${SITE_URL}/blog/${post.slug}`,
    lastmod: post.updatedDate || post.publishedDate,
    changefreq: "weekly" as const,
    priority: post.featured ? 0.9 : 0.7
  };
}
