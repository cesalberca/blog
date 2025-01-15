import type { FC } from 'react'
import Link from 'next/link'
import { AccentCard } from '@/core/components/accent-card/accent-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'
import type { PostMetadata } from '@/post-metadata'

export const PostExcerpt: FC<{ post: PostMetadata }> = ({ post }) => (
  <Link href={`/src/app/%5Blocale%5D/blog/${post.slug}`}>
    <AccentCard className="break-inside-avoid mb-4">
      <Image
        src={`/assets/images/posts/${post.image}`}
        alt={post.title}
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-lg"
      />
      <section className="flex flex-col p-m">
        <h4 className="mb-xs">{post.title}</h4>
        <Markdown value={post.summary}></Markdown>
      </section>
    </AccentCard>
  </Link>
)
