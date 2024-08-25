import { type FC, type PropsWithChildren } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Page } from '@/core/components/page/page'
import { baseUrl } from '@/app/sitemap'
import { Background } from '@/core/components/background/background'
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
      <Background className="w-full h-[60vh]" image={`/assets/images/talks/${metadata.image}`}>
        <div className="p-xl">
          <h1>
            <AccentText>{metadata.title}</AccentText>
          </h1>
          <div className="mt-xxs flex gap-xxs">
            {metadata.categories.map(category => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
      </Background>
      <article className="wrapper mt-m prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
