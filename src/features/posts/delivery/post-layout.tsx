import { Page } from '@/core/components/page/page'
import { ReactNode } from 'react'
import { PostPage } from '@/features/posts/delivery/post.page'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { getLocale } from 'next-intl/server'

export async function PostLayout({ children, slug }: { children: ReactNode; slug: string }) {
  const locale = await getLocale()
  const { metadata } = (await import(`@/app/[locale]/blog/(posts)/(${locale})/${slug}/page.mdx`)) as {
    metadata: PostMetadata
  }

  return (
    <Page top>
      <PostPage metadata={metadata} slug={slug}>
        {children}
      </PostPage>
    </Page>
  )
}
