import { seedBlogPosts } from "@/lib/codaService";
import type { BlogSeedPost } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type SeedRequestBody = {
  posts?: BlogSeedPost[];
  dryRun?: boolean;
  repository?: "table";
  keyColumns?: string[];
  docId?: string;
  tableId?: string;
};

type SeedResponse = {
  ok: boolean;
  message?: string;
  seeded?: number;
  dryRun?: boolean;
  repository?: "table";
  requestId?: string;
  addedRowIds?: string[];
  updatedRowIds?: string[];
  error?: string;
};

function isTruthy(value: unknown): boolean {
  return value === true || value === "true" || value === "1";
}

function isAuthorized(req: NextApiRequest): boolean {
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const seedSecret = process.env.BLOG_SEED_SECRET;
  if (!seedSecret) {
    return false;
  }

  const providedSecret =
    req.headers["x-seed-secret"] ||
    req.headers.authorization?.replace(/^Bearer\s+/i, "") ||
    req.query.secret;

  return providedSecret === seedSecret;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SeedResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed. Use POST.",
    });
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({
      ok: false,
      error: "Unauthorized seed request.",
    });
  }

  try {
    const body = (req.body || {}) as SeedRequestBody;
    const posts = body.posts || [];
    const dryRun = isTruthy(req.query.dryRun) || isTruthy(body.dryRun);

    if (!posts.length) {
      return res.status(400).json({
        ok: false,
        error: "At least one post is required.",
      });
    }

    const result = await seedBlogPosts(posts, {
      dryRun,
      repository: body.repository,
      docId: body.docId,
      keyColumns: body.keyColumns,
      tableId: body.tableId,
    });

    return res.status(dryRun ? 200 : 201).json({
      ok: true,
      message: dryRun
        ? "Dry run complete. No rows were written."
        : "Blog posts submitted to the repository.",
      seeded: result.rows,
      dryRun: result.dryRun,
      repository: result.repository,
      requestId: result.response?.requestId,
      addedRowIds: result.response?.addedRowIds,
      updatedRowIds: result.response?.updatedRowIds,
    });
  } catch (error) {
    console.error("Error seeding blog posts:", error);
    return res.status(500).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to seed blog posts.",
    });
  }
}
