import type { FC } from 'react'
import type { PostMetadata } from '@/posts'
import Link from 'next/link'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'

export const PostExcerpt: FC<{ post: PostMetadata }> = ({ post }) => (
  <Link href={`/blog/${post.slug}`}>
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
)
