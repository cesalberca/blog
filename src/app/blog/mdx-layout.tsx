import { Page } from '@/core/components/page/page'
import type { ReactNode } from 'react'
import { PostPage } from '@/features/posts/delivery/post.page'
import type { PostMetadata } from '@/post-metadata'

export default async function MdxLayout({ children, slug }: { children: ReactNode; slug: string }) {
  const { metadata } = (await import(`./(posts)/${slug}/page.mdx`)) as { metadata: PostMetadata }

  return (
    <Page top>
      <PostPage metadata={metadata} slug={slug}>
        {children}
      </PostPage>
    </Page>
  )
}
