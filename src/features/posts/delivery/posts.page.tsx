import type { FC } from 'react'
import { getPosts } from '@/posts'
import { Page } from '@/core/components/page/page'
import { getTranslations } from 'next-intl/server'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { Masonry } from '@/core/components/masonry/masonry'
import type { Locale } from '@/core/i18n/locale'
import { CategoryCloud } from '@/features/posts/delivery/category-cloud'

export const BlogPostsPage: FC<{ locale: Locale }> = async ({ locale }) => {
  const allBlogs = await getPosts({ locale })
  const t = await getTranslations()

  return (
    <Page>
      <h1 className="wrapper text-center mb-4">{t('blog.title')}</h1>
      <CategoryCloud />
      <Masonry>
        {allBlogs.map((post) => (
          <PostExcerpt key={post.slug} post={post} />
        ))}
      </Masonry>
    </Page>
  )
}
