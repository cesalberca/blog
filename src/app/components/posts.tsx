import Link from 'next/link'
import { getBlogPosts } from '../utils'
import type { FC } from 'react'

export const BlogPosts: FC = () => {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1
          }
          return 1
        })
        .map(post => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">{post.metadata.date}</p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}
