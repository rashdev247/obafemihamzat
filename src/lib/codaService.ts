import type {
  BlogCategory,
  BlogPost,
  BlogSeedPost,
  BlogTag,
  CodaBlogRow,
} from "@/types"

const CODA_API_BASE = process.env.CODA_API_BASE || "https://coda.io/apis/v1"
const CODA_API_TOKEN = process.env.CODA_API_TOKEN
const CODA_DOC_ID = process.env.CODA_DOC_ID
const CODA_TABLE_ID = process.env.CODA_TABLE_ID
const CODA_TABLE_NAME = process.env.CODA_TABLE_NAME || "Blog Posts"

interface CodaApiResponse {
  items: CodaBlogRow[]
  nextPageToken?: string
}

type CodaTableReference = {
  id: string
  name: string
}

type CodaTablesResponse = {
  items: CodaTableReference[]
}

type CodaCellInput = {
  column: string
  value: string | number | boolean | string[] | null
}

type CodaRowInput = {
  cells: CodaCellInput[]
}

type CodaMutationResponse = {
  requestId?: string
  addedRowIds?: string[]
  updatedRowIds?: string[]
  rowIds?: string[]
  [key: string]: unknown
}

type BlogRepository = "table"
type CodaValueFormat = "simple" | "rich"

type CodaRichObject = {
  "@type"?: string
  display?: string
  label?: string
  name?: string
  text?: string
  title?: string
  url?: string
  value?: string | number | boolean
  amount?: number
  [key: string]: unknown
}

export type SeedBlogPostsOptions = {
  repository?: BlogRepository
  docId?: string
  tableId?: string
  keyColumns?: string[]
  dryRun?: boolean
}

export type SeedBlogPostsResult = {
  rows: number
  dryRun: boolean
  repository: BlogRepository
  payload: {
    markdown?: string
    rows: CodaRowInput[]
    keyColumns: string[]
  }
  response?: CodaMutationResponse
}

/**
 * Fetch all rows from a Coda table with pagination support
 */
async function resolveBlogPostsTableId(
  docId: string = CODA_DOC_ID!,
  tableId: string = CODA_TABLE_ID!
): Promise<string> {
  if (tableId) {
    return tableId
  }

  if (!CODA_API_TOKEN || !docId) {
    throw new Error("Coda API credentials are not configured")
  }

  const response = await fetch(`${CODA_API_BASE}/docs/${docId}/tables`, {
    headers: {
      Authorization: `Bearer ${CODA_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Coda tables lookup failed: ${response.status} ${response.statusText}`)
  }

  const data = (await response.json()) as CodaTablesResponse
  const table = data.items.find((item) => item.name === CODA_TABLE_NAME)

  if (!table) {
    throw new Error(`Coda table "${CODA_TABLE_NAME}" was not found`)
  }

  return table.id
}

async function fetchCodaTable(
  tableId: string = CODA_TABLE_ID!,
  params: Record<string, string> = {},
  valueFormat: CodaValueFormat = "simple"
): Promise<CodaBlogRow[]> {
  if (!CODA_API_TOKEN || !CODA_DOC_ID) {
    throw new Error("Coda API credentials are not configured")
  }

  const resolvedTableId = await resolveBlogPostsTableId(CODA_DOC_ID, tableId)
  let allRows: CodaBlogRow[] = []
  let nextPageToken: string | undefined

  do {
    const queryParams = new URLSearchParams({
      useColumnNames: "true",
      valueFormat,
      ...params,
      ...(nextPageToken && { pageToken: nextPageToken }),
    })

    const response = await fetch(
      `${CODA_API_BASE}/docs/${CODA_DOC_ID}/tables/${resolvedTableId}/rows?${queryParams}`,
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

function assertCodaCredentials(
  docId: string = CODA_DOC_ID!,
  tableId: string = CODA_TABLE_ID!
) {
  if (!CODA_API_TOKEN || !docId || !tableId) {
    throw new Error("Coda API credentials are not configured")
  }
}

function normalizeStatus(status: BlogSeedPost["status"]): string {
  if (!status) return "Published"

  const normalized = status.toLowerCase()
  if (normalized === "draft") return "Draft"
  if (normalized === "archived") return "Archived"
  return "Published"
}

function toCsv(values: string[] = []): string {
  return values.map((value) => value.trim()).filter(Boolean).join(", ")
}

function toCodaRow(post: BlogSeedPost, index: number): CodaRowInput {
  const title = post.title.trim()
  const slug = post.slug?.trim() || generateSlug(title)
  const content = post.content?.trim() || post.description.trim()
  const imageUrl = post.imageUrl?.trim() || ""

  return {
    cells: [
      { column: "ID", value: post.id || index + 1 },
      { column: "Slug", value: slug },
      { column: "Title", value: title },
      { column: "Description", value: post.description.trim() },
      { column: "Content", value: content },
      { column: "Image URL", value: imageUrl },
      { column: "Author", value: post.authorName?.trim() || "Campaign Team" },
      { column: "Status", value: normalizeStatus(post.status) },
      { column: "Published Date", value: post.publishedDate || new Date().toISOString() },
      { column: "Featured", value: String(Boolean(post.featured)) },
      { column: "Pinned", value: String(Boolean(post.pinned)) },
      { column: "Categories", value: toCsv(post.categories) },
      { column: "Tags", value: toCsv(post.tags) },
      { column: "SEO Title", value: post.seoTitle?.trim() || title },
      { column: "SEO Description", value: post.seoDescription?.trim() || post.description.trim() },
      { column: "SEO Keywords", value: post.seoKeywords?.trim() || toCsv(post.tags) },
      { column: "Read Time (min)", value: post.readTime || calculateReadTime(content) },
      { column: "View Count", value: post.viewCount || 0 },
    ],
  }
}

function sortBlogPosts(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  })
}

function unwrapRichTextCodeFence(value: string): string {
  const trimmed = value.trim()
  const fenced = trimmed.match(/^```(?:[A-Za-z0-9_-]+\n)?([\s\S]*?)\n?```$/)

  return fenced ? fenced[1] : value
}

function codaRichValueToString(
  value: unknown,
  options: { preferUrl?: boolean } = {}
): string {
  if (typeof value === "string") {
    return unwrapRichTextCodeFence(value)
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value)
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => codaRichValueToString(item, options))
      .filter(Boolean)
      .join(", ")
  }

  if (value && typeof value === "object") {
    const richValue = value as CodaRichObject

    if (options.preferUrl && typeof richValue.url === "string" && richValue.url) {
      return richValue.url
    }

    for (const key of ["name", "display", "text", "label", "title"] as const) {
      if (typeof richValue[key] === "string" && richValue[key]) {
        return richValue[key]
      }
    }

    if (
      typeof richValue.value === "string" ||
      typeof richValue.value === "number" ||
      typeof richValue.value === "boolean"
    ) {
      return String(richValue.value)
    }

    if (typeof richValue.url === "string" && richValue.url) {
      return richValue.url
    }

    if (typeof richValue.amount === "number") {
      return String(richValue.amount)
    }
  }

  return ""
}

function richMarkdownToPlainText(value: unknown): string {
  return codaRichValueToString(value)
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]*>/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s{0,3}>\s?/gm, "")
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
    .replace(/[*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function richMarkdownToList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .flatMap((item) => richMarkdownToList(item))
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return richMarkdownToPlainText(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

function richMarkdownToNumber(value: unknown): number | undefined {
  const numericValue =
    typeof value === "number" ? value : Number(richMarkdownToPlainText(value))

  return Number.isFinite(numericValue) ? numericValue : undefined
}

function richMarkdownToBoolean(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value
  }

  return richMarkdownToPlainText(value).toLowerCase() === "true"
}

function isPublishedStatus(value: unknown): boolean {
  const status = richMarkdownToPlainText(value).toLowerCase()

  if (!status || status.includes("draft") || status.includes("archived")) {
    return false
  }

  return status.includes("published")
}

/**
 * Transform Coda row data to BlogPost format
 */
function transformCodaRowToBlogPost(row: CodaBlogRow): BlogPost | null {
  try {
    const values = row.values
    // Skip if status is not 'Published'
    if (!isPublishedStatus(values.Status)) {
      return null
    }

    // Parse categories and tags
    const categories = richMarkdownToList(values.Categories)

    const tags = richMarkdownToList(values.Tags)

    const authorName =
      richMarkdownToPlainText(values["Author Name"]) ||
      richMarkdownToPlainText(values.Author) ||
      "Anonymous"
    const author: BlogPost["author"] = {
      name: authorName,
    }

    const authorAvatar = codaRichValueToString(values["Author Avatar URL"], {
      preferUrl: true,
    })
    if (authorAvatar) {
      author.avatar = authorAvatar
    }

    const seo: BlogPost["seo"] = {}
    const seoTitle = richMarkdownToPlainText(values["SEO Title"])
    const seoDescription = richMarkdownToPlainText(values["SEO Description"])
    const seoKeywords = richMarkdownToPlainText(values["SEO Keywords"])
    const ogImage = codaRichValueToString(values["OG Image URL"], {
      preferUrl: true,
    })
    const canonicalUrl = codaRichValueToString(values["Canonical URL"], {
      preferUrl: true,
    })

    if (seoTitle) {
      seo.title = seoTitle
    }
    if (seoDescription) {
      seo.description = seoDescription
    }
    if (seoKeywords) {
      seo.keywords = seoKeywords
    }
    if (ogImage) {
      seo.ogImage = ogImage
    }
    if (canonicalUrl) {
      seo.canonicalUrl = canonicalUrl
    }

    const idValue = richMarkdownToNumber(values.ID)
    const rowIdValue = Number(row.id.replace(/\D/g, ""))
    const title = richMarkdownToPlainText(values.Title)
    const content = codaRichValueToString(values.Content)
    const readTime = richMarkdownToNumber(values["Read Time (min)"]) ??
      richMarkdownToNumber(values["Read Time"])
    const viewCount = richMarkdownToNumber(values["View Count"])

    return {
      id: idValue ?? (Number.isFinite(rowIdValue) ? rowIdValue : 0),
      slug: richMarkdownToPlainText(values.Slug) || generateSlug(title),
      title,
      description: richMarkdownToPlainText(values.Description),
      content,
      imageUrl: codaRichValueToString(values["Image URL"], { preferUrl: true }) ||
        codaRichValueToString(values["Featured Image URL"], { preferUrl: true }) ||
        codaRichValueToString(values.ImageURL, { preferUrl: true }),
      author,
      status: "published",
      publishedDate: richMarkdownToPlainText(values["Published Date"]) ||
        richMarkdownToPlainText(values.Date) ||
        new Date().toISOString(),
      featured: richMarkdownToBoolean(values.Featured),
      pinned: richMarkdownToBoolean(values.Pinned),
      categories,
      tags,
      seo,
      readTime: readTime ?? calculateReadTime(content),
      viewCount: viewCount ?? 0,
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
 * Read all published blog posts from a Coda table.
 */
async function readAllBlogPostsFromTable(): Promise<BlogPost[]> {
  try {
    const richRows = await fetchCodaTable(CODA_TABLE_ID!, {}, "rich")
    const richPosts = richRows
      .map(transformCodaRowToBlogPost)
      .filter((post): post is BlogPost => post !== null)

    if (richPosts.length > 0) {
      return richPosts
    }
  } catch (error) {
    console.error("Error fetching rich blog posts from Coda:", error)
  }

  const rows = await fetchCodaTable(CODA_TABLE_ID!, {}, "simple")
  return rows
    .map(transformCodaRowToBlogPost)
    .filter((post): post is BlogPost => post !== null)
}

/**
 * Read all published blog posts from the configured repository.
 */
async function readAllBlogPosts(): Promise<BlogPost[]> {
  return sortBlogPosts(await readAllBlogPostsFromTable())
}

/**
 * Get all published blog posts from Coda.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    return await readAllBlogPosts()
  } catch (error) {
    console.error("Error fetching blog posts from Coda:", error)
    return []
  }
}

/**
 * Get all published blog posts from Coda and surface API errors to callers
 * that need to trigger a local fallback.
 */
export async function getAllBlogPostsStrict(): Promise<BlogPost[]> {
  return readAllBlogPosts()
}

/**
 * Insert or upsert blog posts into the configured Superhuman Docs/Coda table.
 * The API endpoint is still compatible with the Coda v1 rows API.
 */
export async function seedBlogPosts(
  posts: BlogSeedPost[],
  options: SeedBlogPostsOptions = {}
): Promise<SeedBlogPostsResult> {
  const docId = options.docId || CODA_DOC_ID!
  let tableId = options.tableId || CODA_TABLE_ID!
  const keyColumns = options.keyColumns?.length ? options.keyColumns : ["Slug"]
  const repository: BlogRepository = options.repository || "table"

  if (!posts.length) {
    throw new Error("At least one post is required")
  }

  const payload = {
    rows: posts.map(toCodaRow),
    keyColumns,
  }

  if (options.dryRun) {
    return {
      rows: payload.rows.length,
      dryRun: true,
      repository,
      payload,
    }
  }

  tableId = await resolveBlogPostsTableId(docId, tableId)
  assertCodaCredentials(docId, tableId)

  const response = await fetch(
    `${CODA_API_BASE}/docs/${docId}/tables/${tableId}/rows?useColumnNames=true`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CODA_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  )

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(
      `Coda row insert failed: ${response.status} ${response.statusText}. ${errorBody}`
    )
  }

  return {
    rows: payload.rows.length,
    dryRun: false,
    repository,
    payload,
    response: await response.json(),
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
