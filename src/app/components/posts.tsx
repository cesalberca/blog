import Link from 'next/link'
import type { FC } from 'react'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'
import { getPosts } from '@/posts'

export const BlogPosts: FC = async () => {
  const allBlogs = await getPosts()

  return (
    <div className="columns-1 md:columns-2 gap-4 wrapper">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <TiltCard className="break-inside-avoid mb-4">
              <Image
                src={`/assets/images/articles/${post.image}`}
                alt={post.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <section className="flex flex-col p-m">
                <h4 className="mb-xs">{post.title}</h4>
                <Markdown value={post.summary}></Markdown>
              </section>
            </TiltCard>
          </Link>
        ))}
    </div>
  )
}
