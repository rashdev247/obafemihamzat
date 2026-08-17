/**
 * SEO utilities for the Obafemi Hamzat website
 * 
 * This file contains helper functions for generating SEO-optimized content,
 * structured data, and meta tags for the blog.
 */

import type { BlogPost } from "@/types";

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

function uniqueKeywords(...groups: Array<Array<string | undefined> | undefined>): string[] {
  const seen = new Set<string>();

  return groups
    .flatMap((group) => group || [])
    .map((keyword) => keyword?.trim())
    .filter((keyword): keyword is string => Boolean(keyword))
    .filter((keyword) => {
      const key = keyword.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function splitKeywordString(value?: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

export const HAMZAT_CORE_KEYWORDS = [
  "Kadri Obafemi Hamzat",
  "Dr Kadri Obafemi Hamzat",
  "Dr. Kadri Obafemi Hamzat",
  "Obafemi Hamzat",
  "Dr Obafemi Hamzat",
  "Kadri Hamzat",
  "KOH",
  "KOH 2027",
  "Hamzat 2027",
  "Obafemi Hamzat 2027",
  "Kadri Obafemi Hamzat 2027",
  "Obafemi Hamzat official website",
  "Kadri Obafemi Hamzat official website",
  "Obafemi Hamzat campaign",
  "Obafemi Hamzat campaign website",
  "Hamzat campaign website",
  "Hamzat official campaign",
  "Hamzat Lagos campaign",
  "Hamzat Lagos 2027 campaign",
  "Hamzat for Governor",
  "Hamzat for Lagos Governor",
  "Obafemi Hamzat for Governor",
  "Kadri Obafemi Hamzat for Governor",
  "Lagos Hamzat campaign",
  "Hamzat movement",
  "KOH movement",
  "For A Greater Lagos",
  "Greater Lagos",
  "Greater Lagos movement",
  "Greater Lagos vision",
  "A Greater Lagos",
  "Lagos deserves Hamzat",
  "Hamzat leadership",
  "Hamzat public service",
  "Hamzat biography",
  "Obafemi Hamzat biography",
  "Kadri Obafemi Hamzat biography",
  "Hamzat profile",
  "Obafemi Hamzat profile",
  "Hamzat achievements",
  "Obafemi Hamzat achievements",
  "Hamzat track record",
  "Obafemi Hamzat track record",
  "Hamzat manifesto",
  "Obafemi Hamzat manifesto",
  "Hamzat vision",
  "Obafemi Hamzat vision",
  "Deputy Governor Obafemi Hamzat",
  "Lagos 2027",
  "Lagos governorship election",
  "Lagos governorship election 2027",
  "Lagos governor election 2027",
  "Lagos Governor 2027",
  "Lagos State Governor 2027",
  "Lagos governorship candidate",
  "Lagos governorship candidate 2027",
  "Lagos APC governorship candidate",
  "APC governorship candidate Lagos",
  "APC governorship candidate Lagos 2027",
  "APC Lagos governorship candidate 2027",
  "APC Lagos",
  "Lagos APC",
  "APC Lagos 2027",
  "Lagos APC 2027",
  "Lagos APC candidate",
  "APC candidate Lagos",
  "APC candidate Lagos 2027",
  "Deputy Governor of Lagos State",
  "Lagos Deputy Governor",
  "Deputy Governor Lagos",
  "current Deputy Governor of Lagos State",
  "Lagos State Deputy Governor",
  "Lagos State Government",
  "Lagos State politics",
  "Lagos State governance",
  "Lagos politics 2027",
  "Lagos election news",
  "Lagos campaign news",
  "Lagos political news",
  "Lagos APC primary",
  "APC Lagos primary",
  "Lagos governorship primary",
  "Lagos APC governorship primary",
  "Hamzat APC primary",
  "Hamzat APC candidate",
  "Hamzat wins APC primary",
  "Hamzat Lagos APC primary",
  "APC secretariat Ikeja",
  "Ikeja APC secretariat",
  "Governance Advisory Council Lagos",
  "Lagos GAC",
  "GAC Lagos",
  "GAC consensus candidate",
  "Hamzat consensus candidate",
  "Hamzat GAC consensus",
];

export const HAMZAT_NEWS_KEYWORDS = [
  "Obafemi Hamzat news",
  "Kadri Obafemi Hamzat news",
  "Hamzat news",
  "Hamzat latest news",
  "Obafemi Hamzat latest news",
  "Kadri Obafemi Hamzat latest news",
  "Hamzat news today",
  "Obafemi Hamzat news today",
  "Hamzat breaking news",
  "Obafemi Hamzat breaking news",
  "Hamzat campaign news",
  "Obafemi Hamzat campaign news",
  "Hamzat press release",
  "Obafemi Hamzat press release",
  "Hamzat media update",
  "Hamzat official update",
  "Hamzat 2027 update",
  "Hamzat 2027 news",
  "Obafemi Hamzat 2027 news",
  "Hamzat Lagos news",
  "Obafemi Hamzat Lagos news",
  "Hamzat news report",
  "Obafemi Hamzat news report",
  "Kadri Obafemi Hamzat news report",
  "Hamzat governorship news",
  "Obafemi Hamzat governorship news",
  "Lagos 2027 news",
  "Lagos governorship news",
  "Lagos election 2027 news",
  "Lagos APC news",
  "APC Lagos news",
  "APC Lagos candidate news",
  "Lagos campaign updates",
  "Lagos campaign newsroom",
  "Lagos political report",
  "Lagos election report",
  "Hamzat community engagement",
  "Hamzat campaign update",
  "Hamzat campaign event",
  "Hamzat campaign report",
  "Hamzat town hall",
  "Hamzat grassroots campaign",
  "Hamzat volunteer news",
  "Hamzat youth campaign",
  "Hamzat women campaign",
  "Hamzat supporters",
  "Hamzat endorsement",
  "Hamzat polling result",
  "Hamzat primary result",
  "Hamzat vote result",
];

export const LAGOS_POLICY_KEYWORDS = [
  "For A Greater Lagos",
  "Lagos governance",
  "Lagos public governance",
  "Lagos public service reform",
  "Lagos civil service reform",
  "Lagos technology reform",
  "Lagos digital transformation",
  "Lagos smart city",
  "Lagos smart government",
  "Lagos innovation",
  "Lagos innovation economy",
  "Lagos digital economy",
  "Lagos economic growth",
  "Lagos jobs agenda",
  "Lagos youth jobs",
  "Lagos youth empowerment",
  "Lagos entrepreneurship",
  "Lagos SME support",
  "Lagos small business support",
  "Lagos market women support",
  "Lagos artisans support",
  "Lagos startup ecosystem",
  "Lagos education reform",
  "Lagos STEM education",
  "Lagos digital literacy",
  "Lagos vocational training",
  "Lagos healthcare reform",
  "Lagos primary healthcare",
  "Lagos maternal healthcare",
  "Lagos emergency response",
  "Lagos health infrastructure",
  "Lagos transport reform",
  "Lagos transportation",
  "Lagos rail development",
  "Lagos road infrastructure",
  "Lagos waterways transport",
  "Lagos infrastructure",
  "Lagos housing",
  "Lagos security",
  "Lagos safer communities",
  "Lagos traffic management",
  "Lagos waste management",
  "Lagos flood resilience",
  "Lagos climate resilience",
  "Lagos urban planning",
  "Lagos megacity",
  "Lagos inclusive growth",
  "Lagos public-private partnership",
  "Lagos investment",
  "Lagos revenue reform",
  "Lagos food security",
  "Lagos community development",
  "Digital Lagos",
  "Digital Lagos 2.0",
  "Smart Lagos",
  "future of Lagos",
  "next chapter of Lagos",
];

export const LAGOS_LOCATION_KEYWORDS = [
  "Lagos Island",
  "Lagos Mainland",
  "Lagos Central",
  "Lagos East",
  "Lagos West",
  "Ikeja",
  "Epe",
  "Badagry",
  "Ikorodu",
  "Alimosho",
  "Agege",
  "Surulere",
  "Mushin",
  "Oshodi Isolo",
  "Kosofe",
  "Somolu",
  "Eti Osa",
  "Ojo",
  "Amuwo Odofin",
  "Ifako Ijaiye",
  "Apapa",
  "Lagos markets",
  "Lagos communities",
  "Lagos wards",
  "Lagos grassroots",
  "Lagos professionals",
  "Lagos students",
  "Lagos youth",
  "Lagos women",
  "Lagos voters",
];

export const SEARCH_INTENT_KEYWORDS = [
  "who is Obafemi Hamzat",
  "who is Kadri Obafemi Hamzat",
  "what is Obafemi Hamzat known for",
  "is Obafemi Hamzat running for governor",
  "Obafemi Hamzat running mate",
  "Obafemi Hamzat APC candidate",
  "Obafemi Hamzat deputy governor record",
  "Obafemi Hamzat campaign promises",
  "Obafemi Hamzat policy agenda",
  "Obafemi Hamzat Lagos manifesto",
  "Obafemi Hamzat official statement",
  "Obafemi Hamzat election result",
  "Obafemi Hamzat primary election result",
  "Obafemi Hamzat GAC endorsement",
  "Obafemi Hamzat consensus candidate",
  "latest on Hamzat 2027",
  "latest on Lagos APC governorship candidate",
  "Lagos 2027 APC candidate",
  "Lagos governor election candidate APC",
  "best candidate for Lagos governor 2027",
  "experienced Lagos governor candidate",
  "technocrat Lagos governor candidate",
  "engineer Lagos governor candidate",
  "public servant Lagos governor candidate",
];

export const SITE_KEYWORDS = uniqueKeywords(
  HAMZAT_CORE_KEYWORDS,
  HAMZAT_NEWS_KEYWORDS,
  LAGOS_POLICY_KEYWORDS,
  LAGOS_LOCATION_KEYWORDS,
  SEARCH_INTENT_KEYWORDS,
);

type BreadcrumbItem = {
  name: string;
  url: string;
};

type CampaignPageSchemaInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
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

export function getCampaignKeywords(extraKeywords: string[] = []): string[] {
  return uniqueKeywords(SITE_KEYWORDS, extraKeywords);
}

export function normalizeKeywords(keywords: string[] = SITE_KEYWORDS): string {
  return uniqueKeywords(keywords).join(", ");
}

export function getStructuredDataTopics(
  keywords: string[] = SITE_KEYWORDS,
  limit: number = 40
) {
  return uniqueKeywords(keywords)
    .slice(0, limit)
    .map((name) => ({
      "@type": "Thing",
      name,
    }));
}

export function buildBlogPostKeywordList(
  post: BlogPost,
  maxKeywords: number = 150
): string[] {
  const titleKeywords = [
    post.title,
    `${post.title} news`,
    `${post.title} report`,
    `${post.title} latest`,
    `${post.title} update`,
  ];

  const titleWords = post.title
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9-]/gi, "").trim())
    .filter((word) => word.length > 4);

  return uniqueKeywords(
    titleKeywords,
    splitKeywordString(post.seo?.keywords),
    post.categories,
    post.tags,
    titleWords,
    HAMZAT_NEWS_KEYWORDS,
    HAMZAT_CORE_KEYWORDS,
    LAGOS_POLICY_KEYWORDS,
    SEARCH_INTENT_KEYWORDS,
  ).slice(0, maxKeywords);
}

export function generateCampaignPageSchema({
  title,
  description,
  url,
  image = SITE_IMAGE,
  keywords = SITE_KEYWORDS,
  breadcrumbs,
}: CampaignPageSchemaInput) {
  const mergedKeywords = getCampaignKeywords(keywords);
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
        keywords: normalizeKeywords(SITE_KEYWORDS),
        inLanguage: SITE_LANGUAGE,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: [
          "Obafemi Hamzat",
          "Dr Obafemi Hamzat",
          "Dr Kadri Obafemi Hamzat",
          "Kadri Hamzat",
          "KOH",
          "Hamzat 2027",
        ],
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
        knowsAbout: getCampaignKeywords(LAGOS_POLICY_KEYWORDS).slice(0, 80),
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#campaign`,
        name: "Obafemi Hamzat 2027 Campaign Movement",
        url: toAbsoluteUrl("/"),
        keywords: normalizeKeywords(mergedKeywords),
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
        keywords: normalizeKeywords(mergedKeywords),
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: [
          {
            "@id": `${SITE_URL}/#person`,
          },
          ...getStructuredDataTopics(mergedKeywords, 24),
        ],
        mentions: getStructuredDataTopics(mergedKeywords, 32),
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
  return buildBlogPostKeywordList(post, maxKeywords).join(", ");
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
  return `${baseUrl}/news/${slug}`;
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
  const keywordList = buildBlogPostKeywordList(post);
  const keywords = normalizeKeywords(keywordList);

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
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
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
        width: 1024,
        height: 1024
      },
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
    about: [
      {
        "@id": `${SITE_URL}/#person`,
      },
      ...post.categories.map(cat => ({
        "@type": "Thing",
        name: cat
      })),
      ...getStructuredDataTopics(keywordList, 36),
    ],
    mentions: getStructuredDataTopics(keywordList, 48),
    ...(relatedPosts.length > 0 && {
      relatedLink: relatedPosts.map(rp => 
        `${SITE_URL}/news/${rp.slug}`
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
      url: `${SITE_URL}/news/${post.slug}`,
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
    url: `${SITE_URL}/news/${post.slug}`,
    lastmod: post.updatedDate || post.publishedDate,
    changefreq: "weekly" as const,
    priority: post.featured ? 0.9 : 0.7
  };
}
