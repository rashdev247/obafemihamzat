import { StaticImageData } from "next/image"

// types.ts
export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string // Full article content (Markdown or HTML)
  imageUrl: string
  author: {
    name: string
    avatar?: string
  }
  status: 'draft' | 'published' | 'archived'
  publishedDate: string
  updatedDate?: string
  featured: boolean
  pinned: boolean
  categories: string[]
  tags: string[]
  seo: {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    canonicalUrl?: string
  }
  readTime?: number
  viewCount?: number
}

// Legacy support - for backward compatibility with existing components
export interface LegacyBlogPost {
  id: number
  author: string
  date: string
  title: string
  description: string
  imageUrl: StaticImageData | string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  count: number
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  count: number
}

export interface CodaBlogRow {
  id: string
  values: {
    [key: string]: unknown
  }
}
