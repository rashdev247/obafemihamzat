import { BlogPost, BlogCategory, BlogTag, CodaBlogRow } from "@/types"

const CODA_API_BASE = "https://coda.io/apis/v1"
const CODA_API_TOKEN = process.env.CODA_API_TOKEN
const CODA_DOC_ID = process.env.CODA_DOC_ID
const CODA_TABLE_ID = process.env.CODA_TABLE_ID

interface CodaApiResponse {
  items: CodaBlogRow[]
  nextPageToken?: string
}

/**
 * Fetch all rows from a Coda table with pagination support
 */
async function fetchCodaTable(
  tableId: string = CODA_TABLE_ID!,
  params: Record<string, string> = {}
): Promise<CodaBlogRow[]> {
  if (!CODA_API_TOKEN || !CODA_DOC_ID || !tableId) {
    throw new Error("Coda API credentials are not configured")
  }

  let allRows: CodaBlogRow[] = []
  let nextPageToken: string | undefined

  do {
    const queryParams = new URLSearchParams({
      useColumnNames: "true",
      ...params,
      ...(nextPageToken && { pageToken: nextPageToken }),
    })

    const response = await fetch(
      `${CODA_API_BASE}/docs/${CODA_DOC_ID}/tables/${tableId}/rows?${queryParams}`,
      {
        headers: {
          Authorization: `Bearer ${CODA_API_TOKEN}`,
          "Content-Type": "application/json",
        },
           next: { revalidate: 300 }, // Cache for 5 minutes
      }
    )

    if (!response.ok) {
      throw new Error(`Coda API error: ${response.status} ${response.statusText}`)
    }

    const data: CodaApiResponse = await response.json()
    allRows = [...allRows, ...data.items]
    nextPageToken = data.nextPageToken
  } while (nextPageToken)

  return allRows
}

/**
 * Transform Coda row data to BlogPost format
 */
function transformCodaRowToBlogPost(row: CodaBlogRow): BlogPost | null {
  try {
    const values = row.values

    // Skip if status is not 'Published'
    if (values.Status !== "Published" && values.Status !== "published") {
      return null
    }

    // Parse categories and tags
    const categories = values.Categories
      ? typeof values.Categories === "string"
        ? values.Categories.split(",").map((c: string) => c.trim())
        : Array.isArray(values.Categories)
        ? values.Categories
        : []
      : []

    const tags = values.Tags
      ? typeof values.Tags === "string"
        ? values.Tags.split(",").map((t: string) => t.trim())
        : Array.isArray(values.Tags)
        ? values.Tags
        : []
      : []

    return {
      id: typeof values.ID === "number" ? values.ID : parseInt(typeof values.ID === "string" ? values.ID : row.id),
      slug: typeof values.Slug === "string" ? values.Slug : generateSlug(typeof values.Title === "string" ? values.Title : ""),
      title: typeof values.Title === "string" ? values.Title : "",
      description: typeof values.Description === "string" ? values.Description : "",
      content: typeof values.Content === "string" ? values.Content : "",
      imageUrl: typeof values["Featured Image URL"] === "string"
        ? values["Featured Image URL"]
        : typeof values.ImageURL === "string"
        ? values.ImageURL
        : "",
      author: {
        name: typeof values["Author Name"] === "string"
          ? values["Author Name"]
          : typeof values.Author === "string"
          ? values.Author
          : "Anonymous",
        avatar: typeof values["Author Avatar URL"] === "string" ? values["Author Avatar URL"] : undefined,
      },
      status: "published",
      publishedDate: typeof values["Published Date"] === "string"
        ? values["Published Date"]
        : typeof values.Date === "string"
        ? values.Date
        : new Date().toISOString(),
      featured: values.Featured === true || values.Featured === "true",
      pinned: values.Pinned === true || values.Pinned === "true",
      categories,
      tags,
      seo: {
        title: typeof values["SEO Title"] === "string" ? values["SEO Title"] : undefined,
        description: typeof values["SEO Description"] === "string" ? values["SEO Description"] : undefined,
        keywords: typeof values["SEO Keywords"] === "string" ? values["SEO Keywords"] : undefined,
        ogImage: typeof values["OG Image URL"] === "string" ? values["OG Image URL"] : undefined,
        canonicalUrl: typeof values["Canonical URL"] === "string" ? values["Canonical URL"] : undefined,
      },
      readTime: typeof values["Read Time"] === "number"
        ? values["Read Time"]
        : calculateReadTime(typeof values.Content === "string" ? values.Content : ""),
      viewCount: typeof values["View Count"] === "number"
        ? values["View Count"]
        : typeof values["View Count"] === "string"
        ? parseInt(values["View Count"])
        : 0,
    }
  } catch (error) {
    console.error("Error transforming Coda row:", error)
    return null
  }
}

/**
 * Generate URL-friendly slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

/**
 * Calculate estimated read time in minutes
 */
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Get all published blog posts from Coda
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const rows = await fetchCodaTable()
    const posts = rows
      .map(transformCodaRowToBlogPost)
      .filter((post): post is BlogPost => post !== null)

    // Sort by pinned first, then by date
    return posts.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
  } catch (error) {
    console.error("Error fetching blog posts from Coda:", error)
    return []
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllBlogPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPosts()
    return posts.filter((post) => post.featured).slice(0, limit)
  } catch (error) {
    console.error("Error fetching featured blog posts:", error)
    return []
  }
}

/**
 * Get all categories with post counts
 */
export async function getAllCategories(): Promise<BlogCategory[]> {
  try {
    const posts = await getAllBlogPosts()
    const categoryMap = new Map<string, number>()

    posts.forEach((post) => {
      post.categories.forEach((category) => {
        categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
      })
    })

    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({
        id: generateSlug(name),
        name,
        slug: generateSlug(name),
        count,
      }))
      .sort((a, b) => b.count - a.count)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

/**
 * Get all tags with post counts
 */
export async function getAllTags(): Promise<BlogTag[]> {
  try {
    const posts = await getAllBlogPosts()
    const tagMap = new Map<string, number>()

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
    })

    return Array.from(tagMap.entries())
      .map(([name, count]) => ({
        id: generateSlug(name),
        name,
        slug: generateSlug(name),
        count,
      }))
      .sort((a, b) => b.count - a.count)
  } catch (error) {
    console.error("Error fetching tags:", error)
    return []
  }
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPosts()
    return posts.filter((post) =>
      post.categories.some((cat) => generateSlug(cat) === categorySlug)
    )
  } catch (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error)
    return []
  }
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPosts()
    return posts.filter((post) =>
      post.tags.some((tag) => generateSlug(tag) === tagSlug)
    )
  } catch (error) {
    console.error(`Error fetching posts for tag ${tagSlug}:`, error)
    return []
  }
}

/**
 * Search posts by query
 */
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPosts()
    const lowerQuery = query.toLowerCase()
    
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.author.name.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        post.categories.some((cat) => cat.toLowerCase().includes(lowerQuery))
    )
  } catch (error) {
    console.error("Error searching blog posts:", error)
    return []
  }
}

/**
 * Get related posts based on categories and tags
 */
export async function getRelatedPosts(
  currentPostId: number,
  limit: number = 3
): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllBlogPosts()
    const currentPost = allPosts.find((post) => post.id === currentPostId)
    
    if (!currentPost) return []

    // Score posts based on shared categories and tags
    const scoredPosts = allPosts
      .filter((post) => post.id !== currentPostId)
      .map((post) => {
        let score = 0
        
        // Add points for shared categories
        post.categories.forEach((cat) => {
          if (currentPost.categories.includes(cat)) score += 2
        })
        
        // Add points for shared tags
        post.tags.forEach((tag) => {
          if (currentPost.tags.includes(tag)) score += 1
        })
        
        return { post, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)

    return scoredPosts.map((item) => item.post)
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}
