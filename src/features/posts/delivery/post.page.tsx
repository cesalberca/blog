import type { FC, PropsWithChildren } from 'react'
import type { PostMetadata } from '@/posts'
import { useTranslations } from 'next-intl'
import { baseUrl } from '@/app/sitemap'
import { LeetBackground } from '@/core/components/leet-card/leet-background'
import { Datetime } from '@/core/datetime'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Link } from '@/core/components/link/link'

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
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <LeetBackground className="w-full h-[60vh]" image={`/assets/images/articles/${metadata.image}`}>
        <div className="p-xl">
          <header className="flex gap-xxs">
            <small>{Datetime.fromIso(metadata.date).format()}</small>
            <small> - </small>
            <small>{t('blog.articleDuration', { minutes: metadata.readTime })}</small>
          </header>
          <h1>
            <ScrambleText>{metadata.title}</ScrambleText>
          </h1>
          <div className="mt-xxs flex gap-xxs">
            {metadata.categories.map(category => (
              <Link
                key={category}
                type="invisible"
                to={`/blog/category/${category}`}
                className={badgeVariants({ variant: 'outline' })}
              >
                <Badge>{category}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </LeetBackground>
      <article className="wrapper mt-m prose dark:prose-invert text-current">{children}</article>
    </>
  )
}
