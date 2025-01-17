import type { FC } from 'react'
import { getPosts } from '@/features/posts/domain/posts'
import { Page } from '@/core/components/page/page'
import { getTranslations } from 'next-intl/server'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { Masonry } from '@/core/components/masonry/masonry'
import { Locale } from '@/core/i18n/locale'

export const BlogPostsPage: FC<{ locale: Locale }> = async ({ locale }) => {
  const allBlogs = await getPosts({ locale })
  const t = await getTranslations()

  return (
    <Page>
      <h1 className="wrapper mb-8">{t('blog.title')}</h1>
      <Masonry>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1
            }
            return 1
          })
          .map(post => (
            <PostExcerpt key={post.slug} post={post} />
          ))}
      </Masonry>
    </Page>
  )
}
