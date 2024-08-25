import { type FC, type PropsWithChildren } from 'react'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { Page } from '@/core/components/page/page'
import { baseUrl } from '@/app/sitemap'
import { LeetBackground } from '@/core/components/leet-background/leet-background'
import { Badge } from '@/components/ui/badge'
import type { TalkMetadata } from '@/talk-metadata'

export const TalkPage: FC<PropsWithChildren<{ slug: string; metadata: TalkMetadata }>> = async ({
  slug,
  children,
  metadata,
}) => {
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
      <LeetBackground className="w-full h-[60vh]" image={`/assets/images/talks/${metadata.image}`}>
        <div className="p-xl">
          <h1>
            <ScrambleText>{metadata.title}</ScrambleText>
          </h1>
          <div className="mt-xxs flex gap-xxs">
            {metadata.categories.map(category => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
      </LeetBackground>
      <article className="wrapper mt-m prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
