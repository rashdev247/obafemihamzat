import type { NextApiRequest, NextApiResponse } from "next"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/codaService"
import { BlogPost } from "@/types"

type ResponseData = {
  post?: BlogPost
  relatedPosts?: BlogPost[]
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
    const { slug } = req.query

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ error: "Slug is required" })
    }

    const post = await getBlogPostBySlug(slug)

    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }

    // Get related posts
    const relatedPosts = await getRelatedPosts(post.id, 3)

    return res.status(200).json({ post, relatedPosts })
  } catch (error) {
    console.error("Error in /api/blog/[slug]:", error)
    return res.status(500).json({ error: "Failed to fetch blog post" })
  }
}
