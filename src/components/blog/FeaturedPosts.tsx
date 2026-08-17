import React from "react"
import {BlogPost} from "@/types"
import BlogCard from "./BlogCard"
import Link from "next/link"
import {ArrowRight} from "lucide-react"

interface FeaturedPostsProps {
  posts: BlogPost[]
  title?: string
  showViewAll?: boolean
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({
  posts,
  title = "Featured Articles",
  showViewAll = true,
}) => {
  if (posts.length === 0) return null

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#051438]">{title}</h2>
        {showViewAll && (
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length > 3 && (
        <div className="mt-8 text-center">
          <Link
            href="/blog?featured=true"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            See more featured articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  )
}

export default FeaturedPosts
