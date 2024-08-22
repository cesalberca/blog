import { Page } from '@/core/components/page/page'
import { LeetBackground } from '@/core/components/leet-card/leet-background'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import type { PropsWithChildren, ReactNode } from 'react'
import type { TalkMetadata } from '@/talks'
import { baseUrl } from '@/app/sitemap'
import { TalkPage } from '@/features/talks/delivery/talk.page'

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
  const { metadata } = (await import(`./(talks)/${slug}/page.mdx`)) as { metadata: TalkMetadata }

  return (
    <TalkPage slug={slug} metadata={metadata}>
      {children}
    </TalkPage>
  )
}
