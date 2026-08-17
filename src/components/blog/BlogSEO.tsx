import React from "react"
import Head from "next/head"

interface BlogSEOProps {
  title: string
  description: string
  keywords?: string
  author?: string
  publishedDate?: string
  imageUrl?: string
  url?: string
  canonicalUrl?: string
  categories?: string[]
  type?: "website" | "article"
}

/**
 * Reusable SEO component for blog pages
 */
const BlogSEO: React.FC<BlogSEOProps> = ({
  title,
  description,
  keywords,
  author,
  publishedDate,
  imageUrl,
  url,
  canonicalUrl,
  categories = [],
  type = "article",
}) => {
  const fullTitle = `${title} - Plural Health`
  const siteUrl = url || "https://plural.health"
  const defaultImage = "https://res.cloudinary.com/dhdkql4bu/image/upload/v1750059107/pluralLogomain_czun5m.webp"

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Plural Health" />

      {/* Article specific */}
      {type === "article" && (
        <>
          {publishedDate && (
            <meta property="article:published_time" content={publishedDate} />
          )}
          {author && <meta property="article:author" content={author} />}
          {categories.map((cat) => (
            <meta key={cat} property="article:tag" content={cat} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default BlogSEO
