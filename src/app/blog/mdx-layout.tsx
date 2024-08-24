import { Page } from '@/core/components/page/page'
import type { ReactNode } from 'react'
import type { PostMetadata } from '@/posts'
import { PostPage } from '@/features/posts/delivery/post.page'
import { LeetBackground } from '@/core/components/leet-background/leet-background'

/*
export async function generateMetadata({ params }: Params): Promise<Metadata | void> {
  const { title, date: publishedTime, image, summary } = params.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  }
}
*/

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
