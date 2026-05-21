import type { NextApiRequest, NextApiResponse } from "next"
import { getAllTags } from "@/lib/codaService"
import { BlogTag } from "@/types"

type ResponseData = {
  tags?: BlogTag[]
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
    const tags = await getAllTags()
    return res.status(200).json({ tags })
  } catch (error) {
    console.error("Error in /api/blog/tags:", error)
    return res.status(500).json({ error: "Failed to fetch tags" })
  }
}
