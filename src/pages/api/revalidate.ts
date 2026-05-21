import type { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  revalidated?: boolean
  error?: string
}

/**
 * On-demand revalidation endpoint for blog posts
 * Usage: POST /api/revalidate?secret=YOUR_SECRET&path=/blog
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Check for secret to confirm this is a valid request
  const secret = process.env.REVALIDATE_SECRET
  
  if (!secret) {
    return res.status(500).json({ error: "Revalidation secret not configured" })
  }

  if (req.query.secret !== secret) {
    return res.status(401).json({ error: "Invalid token" })
  }

  try {
    const path = req.query.path as string

    if (!path) {
      return res.status(400).json({ error: "Path parameter is required" })
    }

    // Revalidate the specified path
    await res.revalidate(path)

    return res.json({ revalidated: true })
  } catch (err) {
    console.error("Error revalidating:", err)
    return res.status(500).json({ error: "Error revalidating" })
  }
}
