import { type FC, type PropsWithChildren } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Page } from '@/core/components/page/page'
import { baseUrl } from '@/app/sitemap'
import { Background } from '@/core/components/background/background'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import { Badge } from '@/components/ui/badge'

export const NewsletterPage: FC<PropsWithChildren<{ slug: string; metadata: NewsletterMetadata }>> = async ({
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
            '@type': 'Newsletter',
            headline: metadata.title,
            image: `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              '@type': 'César Alberca',
              name: 'Newsletter',
            },
          }),
        }}
      />
      <Background className="w-full h-[60vh]">
        <div className="p-12 bleed-width-section">
          <h1>
            <AccentText>{metadata.title}</AccentText>
          </h1>
          <Badge>{metadata.date?.toIso()}</Badge>
        </div>
      </Background>

      <article className="wrapper mt-6 prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
