import { Page } from '@/core/components/page/page'
import type { FC, PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'
import { PostPage } from '@/features/posts/delivery/post.page'
import { notFound } from 'next/navigation'
import { getPost } from '@/posts'

const Layout: FC<PropsWithChildren<{ params: Promise<{ slug: string }> }>> = async ({ children, params }) => {
  const { slug } = await params
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

export default Layout
