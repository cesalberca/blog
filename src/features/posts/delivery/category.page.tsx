import type { Category } from '@/features/posts/domain/category'
import { categories } from '@/features/posts/domain/categories'
import { getPostsByCategory } from '@/posts'
import { Page } from '@/core/components/page/page'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import type { FC } from 'react'
import { Masonry } from '@/core/components/masonry/masonry'
import { Badge } from '@/components/ui/badge'
import { Locale } from '@/core/i18n/locale'
import { notFound } from 'next/navigation'

export const CategoryPage: FC<{ category: Category; locale: Locale }> = async ({ category, locale }) => {
  if (categories.indexOf(category) == -1) {
    notFound()
  }

  const posts = await getPostsByCategory({ category, locale })

  return (
    <Page>
      <div className="wrapper mb-m gap-2 flex">
        <Badge>{category}</Badge>
      </div>
      <Masonry>
        {posts.map(x => (
          <PostExcerpt key={x.slug} post={x} />
        ))}
      </Masonry>
    </Page>
  )
}
