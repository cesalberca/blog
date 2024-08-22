import { notFound } from 'next/navigation'
import { getBlogPosts } from '../../utils'
import { baseUrl } from '../../sitemap'
import { CustomMDX } from '../../../core/components/mdx/mdx'
import type { Metadata } from 'next'
import { Hero } from '@/core/components/hero/hero'
import { Page } from '@/core/components/page/page'
import { Datetime } from '@/core/datetime'
import { useTranslations } from 'next-intl'
import { LeetBackground } from '@/core/components/leet-card/leet-background'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'

interface Params {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: Params): Metadata | void {
  let post = getBlogPosts().find(post => post.slug === params.slug)
  if (!post) {
    return
  }

  let { title, date: publishedTime, image, summary } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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

function calculateReadTime(text: string, wordsPerMinute: number = 225): number {
  const words = text.split(/\s+/)
  const numWords = words.length
  const readTimeMinutes = numWords / wordsPerMinute

  const totalSeconds = Math.round(readTimeMinutes * 60)

  return Math.floor(totalSeconds / 60)
}

export default function Blog({ params }: Params) {
  let post = getBlogPosts().find(post => post.slug === params.slug)
  const t = useTranslations()

  if (!post) {
    notFound()
  }

  return (
    <Page top>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'César Alberca',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <LeetBackground className="w-screen h-[60vh]" image={`/assets/images/articles/${post.metadata.image}`}>
        <div className="p-xl">
          <header className="flex gap-xxs">
            <small>{Datetime.fromIso(post.metadata.date).format()}</small>
            <small> - </small>
            <small>{t('blog.articleDuration', { minutes: calculateReadTime(post.content) })}</small>
          </header>
          <h1>
            <ScrambleText>{post.metadata.title}</ScrambleText>
          </h1>
        </div>
      </LeetBackground>
      <article className="wrapper mt-m">
        <CustomMDX source={post.content} />
      </article>
    </Page>
  )
}
