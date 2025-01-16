import { Page } from '@/core/components/page/page'
import React, { ReactNode } from 'react'
import { PostPage } from '@/features/posts/delivery/post.page'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'

export async function PostLayout({ children, slug }: { children: ReactNode; slug: string }) {
  const { metadata } = (await import(`@/app/[locale]/blog/(posts)/${slug}/page.mdx`)) as { metadata: PostMetadata }

  return (
    <Page top>
      <PostPage metadata={metadata} slug={slug}>
        {children}
      </PostPage>
    </Page>
  )
}
