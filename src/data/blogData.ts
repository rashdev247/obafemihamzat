import { defaultNewsPosts } from "@/data/defaultNewsPosts";
import type { LegacyBlogPost } from "../types";

export const posts: LegacyBlogPost[] = defaultNewsPosts.map((post) => ({
  id: post.id || 0,
  author: post.authorName || "Campaign Team",
  date: post.publishedDate || new Date().toISOString(),
  title: post.title,
  description: post.description,
  imageUrl: post.imageUrl || "",
}));
