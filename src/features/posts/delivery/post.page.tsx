import type { FC, PropsWithChildren } from 'react'
import { useTranslations } from 'next-intl'
import { baseUrl } from '@/app/sitemap'
import { Background } from '@/core/components/background/background'
import { Datetime } from '@/core/datetime'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { WithKoFiButton } from '@/core/components/ko-fi-button/with-ko-fi-button'

export const PostPage: FC<PropsWithChildren<{ metadata: PostMetadata; slug: string }>> = ({
  metadata,
  slug,
  children,
}) => {
  const t = useTranslations()

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
          <h1>
            <AccentText>{metadata.title}</AccentText>
          </h1>
          <div className="mt-2 flex gap-2">
            {metadata.categories.map(category => (
              <Link
                key={category}
                type="invisible"
                to={`/blog/category/${category}`}
                className={cn(badgeVariants({ variant: 'outline' }), 'p-0 h-min')}
              >
                <Badge>{category}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </Background>
      <article className="wrapper mt-6 prose dark:prose-invert text-current">
        <WithKoFiButton>{children}</WithKoFiButton>
      </article>
    </>
  )
}
