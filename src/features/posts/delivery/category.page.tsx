import type { Category } from '@/app/category'
import { categories } from '@/app/categories'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/posts'
import { Page } from '@/core/components/page/page'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import type { FC } from 'react'
import { Masonry } from '@/core/components/masonry/masonry'
import { Badge } from '@/components/ui/badge'

export const CategoryPage: FC<{ category: Category }> = async ({ category }) => {
  if (categories.indexOf(category) == -1) {
    notFound()
  }

  const posts = await getPostsByCategory({ category })

  return (
    <Page>
      <div className="wrapper mb-m">
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
