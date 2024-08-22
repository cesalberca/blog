import { baseUrl } from '../sitemap'
import { Page } from '@/core/components/page/page'
import { Datetime } from '@/core/datetime'
import { LeetBackground } from '@/core/components/leet-card/leet-background'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import type { PostMetadata } from '@/posts'

/*
export async function generateMetadata({ params }: Params): Promise<Metadata | void> {
  const { title, date: publishedTime, image, summary } = params.metadata
  console.log(params.metadata)
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
  const t = await getTranslations()
  const { metadata } = (await import(`./(posts)/${slug}/page.mdx`)) as { metadata: PostMetadata }

  return (
    <Page top>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: metadata.title,
            datePublished: metadata.date,
            dateModified: metadata.date,
            description: metadata.summary,
            image: metadata.image ? `${baseUrl}${metadata.image}` : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              '@type': 'César Alberca',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <LeetBackground className="w-screen h-[60vh]" image={`/assets/images/articles/${metadata.image}`}>
        <div className="p-xl">
          <header className="flex gap-xxs">
            <small>{Datetime.fromIso(metadata.date).format()}</small>
            <small> - </small>
            <small>{t('blog.articleDuration', { minutes: metadata.readTime })}</small>
          </header>
          <h1>
            <ScrambleText>{metadata.title}</ScrambleText>
          </h1>
        </div>
      </LeetBackground>
      <article className="wrapper mt-m prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
