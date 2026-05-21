import type { NextApiRequest, NextApiResponse } from "next"
import { getAllCategories } from "@/lib/codaService"
import { BlogCategory } from "@/types"

type ResponseData = {
  categories?: BlogCategory[]
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
    const categories = await getAllCategories()
    return res.status(200).json({ categories })
  } catch (error) {
    console.error("Error in /api/blog/categories:", error)
    return res.status(500).json({ error: "Failed to fetch categories" })
  }
}
