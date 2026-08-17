import type { NextApiRequest, NextApiResponse } from "next"
import { getAllBlogPosts, searchBlogPosts, getPostsByCategory, getPostsByTag } from "@/lib/codaService"
import type { BlogPost } from "@/types"

type ResponseData = {
  posts?: BlogPost[]
  total?: number
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { search, category, tag, featured, limit } = req.query

    let posts: BlogPost[] = []

    if (search && typeof search === "string") {
      posts = await searchBlogPosts(search)
    } else if (category && typeof category === "string") {
      posts = await getPostsByCategory(category)
    } else if (tag && typeof tag === "string") {
      posts = await getPostsByTag(tag)
    } else {
      posts = await getAllBlogPosts()
    }

    // Filter featured if requested
    if (featured === "true") {
      posts = posts.filter((post) => post.featured)
    }

    // Apply limit if specified
    if (limit && typeof limit === "string") {
      const limitNum = parseInt(limit, 10)
      if (!isNaN(limitNum)) {
        posts = posts.slice(0, limitNum)
      }
    }

    return res.status(200).json({ posts, total: posts.length })
  } catch (error) {
    console.error("Error in /api/blog/posts:", error)
    return res.status(500).json({ error: "Failed to fetch blog posts" })
  }
}
