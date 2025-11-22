import type { FC, PropsWithChildren } from 'react'
import { getTranslations } from 'next-intl/server'
import { baseUrl } from '@/app/sitemap'
import { Background } from '@/core/components/background/background'
import { Datetime } from '@/core/date/datetime'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { KoFiButton } from '@/core/components/ko-fi-button/ko-fi-button'
import { getTranslatedCategories } from '@/features/posts/domain/categories'
import type { Locale } from '@/core/i18n/locale'
import { NewsletterCard } from '@/core/components/newsletter-card/newsletter-card'

export const PostPage: FC<PropsWithChildren<{ metadata: PostMetadata; slug: string; locale: Locale }>> = async ({
  metadata,
  slug,
  children,
  locale,
}) => {
  const t = await getTranslations({ locale })
  const translatedCategories = await getTranslatedCategories(locale)
  const categoryTranslations = translatedCategories.reduce(
    (acc, { key, translation }) => {
      acc[key] = translation
      return acc
    },
    {} as Record<string, string>,
  )

  return (
    <>
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
              name: 'César Alberca | Blog',
            },
          }),
        }}
      />
      <Background className="w-full h-[60vh]" image={`/assets/images/posts/${metadata.image}`}>
        <div className="p-12">
          <header className="flex gap-2">
            <small>{Datetime.fromIso(metadata.date).format()}</small>
            <small> - </small>
            <small>{t('blog.articleDuration', { minutes: metadata.readTime })}</small>
          </header>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            <AccentText>{metadata.title}</AccentText>
          </h1>
          <div className="mt-2 flex gap-2">
            {metadata.categories.map((category) => (
              <Link
                key={category}
                type="invisible"
                href={`/blog/category/${category}`}
                className={cn(badgeVariants({ variant: 'outline' }), 'p-0 h-min')}
              >
                <Badge>{categoryTranslations[category] || category}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </Background>
      <article className="wrapper mt-6 prose dark:prose-invert text-muted-foreground">
        <div className="mb-10">
          <NewsletterCard />
          <KoFiButton />
        </div>
        {children}
        <div className="mt-10">
          <KoFiButton />
        </div>
      </article>
    </>
  )
}
