import type { FC } from 'react'
import { AccentCard } from '@/core/components/accent-card/accent-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { Link } from '@/core/components/link/link'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'

export const PostExcerpt: FC<{ post: PostMetadata }> = async ({ post }) => {
  const t = await getTranslations('blog.categories')

  return (
    <AccentCard className="mb-4">
      <Link type="invisible" to={`/blog/${post.slug}`}>
        <Image
          src={`/assets/images/posts/${post.image}`}
          alt={post.title}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
        <section className="flex flex-col p-6">
          <h4 className="mb-3">{post.title}</h4>
          <Markdown value={post.summary}></Markdown>
        </section>
      </Link>
      {post.categories.length > 0 && (
        <div className="px-6 pb-6 flex flex-wrap gap-2 mt-2">
          {post.categories.map(category => (
            <Link
              key={category}
              type="invisible"
              to={`/blog/category/${category}`}
              className={cn(badgeVariants({ variant: 'outline' }), 'p-0 h-min')}
            >
              <Badge>{t(category)}</Badge>
            </Link>
          ))}
        </div>
      )}
    </AccentCard>
  )
}
