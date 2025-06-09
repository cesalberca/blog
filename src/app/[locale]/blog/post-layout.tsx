import { Page } from '@/core/components/page/page'
import type { FC, PropsWithChildren } from 'react'
import { getLocale } from 'next-intl/server'
import { PostPage } from '@/features/posts/delivery/post.page'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'

export const PostLayout: FC<PropsWithChildren<{ slug: string }>> = async ({ children, slug }) => {
  const locale = await getLocale()

  const { metadata } = (await import(`./(posts)/${slug}/${locale}.mdx`)) as {
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
