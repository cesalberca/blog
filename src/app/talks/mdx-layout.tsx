import { Page } from '@/core/components/page/page'
import { LeetBackground } from '@/core/components/leet-card/leet-background'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import type { ReactNode } from 'react'
import type { TalkMetadata } from '@/talks'
import { baseUrl } from '@/app/sitemap'

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
    <Page top>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Talk',
            headline: metadata.title,
            image: metadata.image ? `${baseUrl}${metadata.image}` : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              '@type': 'César Alberca',
              name: 'Talk',
            },
          }),
        }}
      />
      <LeetBackground className="w-screen h-[60vh]" image={`/assets/images/talks/${metadata.image}`}>
        <div className="p-xl">
          <h1>
            <ScrambleText>{metadata.title}</ScrambleText>
          </h1>
        </div>
      </LeetBackground>
      <article className="wrapper mt-m prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
