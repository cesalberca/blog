import { Page } from '@/core/components/page/page'
import type { FC, PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'
import { PostPage } from '@/features/posts/delivery/post.page'
import { notFound } from 'next/navigation'
import { getPost } from '@/posts'

export const PostLayout: FC<PropsWithChildren<{ slug: string }>> = async ({ children, slug }) => {
  const locale = await getLocale()
  const metadata = await getPost({ slug, locale })

  if (!metadata) {
    notFound()
  }

  return (
    <Page top>
      <PostPage metadata={metadata} slug={slug} locale={locale}>
        {children}
      </PostPage>
    </Page>
  )
}
