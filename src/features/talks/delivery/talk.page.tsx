import type { FC, PropsWithChildren } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Page } from '@/core/components/page/page'
import { baseUrl } from '@/app/sitemap'
import { Background } from '@/core/components/background/background'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { TalkMetadata } from '@/features/talks/domain/talk-metadata'
import { getTranslations } from 'next-intl/server'
import { jsonLd } from '@/core/jsonld/json-ld'

export const TalkPage: FC<PropsWithChildren<{ slug: string; metadata: TalkMetadata }>> = async ({
  slug,
  children,
  metadata,
}) => {
  const t = await getTranslations('talks')
  return (
    <Page top>
      <script type="application/ld+json" suppressHydrationWarning>
        {jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Event',
          headline: metadata.title,
          image: metadata.image ? `${baseUrl}${metadata.image}` : `/og?title=${encodeURIComponent(metadata.title)}`,
          url: `${baseUrl}/blog/${slug}`,
          author: {
            '@type': 'Person',
            givenName: 'César',
            lastName: 'Alberca'
          },
        })}
      </script>
      <Background className="w-full h-[60vh]" image={`/assets/images/talks/${metadata.image}`}>
        <div className="p-12">
          <h1>
            <AccentText>{metadata.title}</AccentText>
          </h1>
          <div className="mt-2 flex gap-2">
            {metadata.categories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
      </Background>

      <div className="wrapper mt-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Talk Information</CardTitle>
            <CardDescription>Details about this presentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Details</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{t('talkLength')}:</span>
                    <Badge variant="secondary">
                      {metadata.length} {typeof metadata.length === 'number' ? 'minutes' : ''}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{t('talkDifficulty')}:</span>
                    <Badge variant="secondary">{metadata.difficulty}</Badge>
                  </div>
                  {metadata.language && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Language:</span>
                      <Badge variant="secondary">{metadata.language}</Badge>
                    </div>
                  )}
                </div>
              </div>

              {Array.isArray(metadata.events) && metadata.events.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold">{t('event')}</h3>
                  <div className="mt-2 space-y-4">
                    {metadata.events.map((event) => (
                      <div key={`${event.name}-${event.date}`} className="border-b pb-2 last:border-b-0">
                        <div className="font-medium">{event.name}</div>
                        <div className="text-sm text-muted-foreground">{event.date}</div>
                        <div className="mt-2 flex gap-2">
                          {event.slides && (
                            <a
                              href={event.slides}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              {t('talkSlides')}
                            </a>
                          )}
                          {event.video && (
                            <a
                              href={event.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              {t('talkVideo')}
                            </a>
                          )}
                          {event.code && (
                            <a
                              href={event.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              {t('talkCode')}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!metadata.notes && (
                <div>
                  <h3 className="text-lg font-semibold">Notes</h3>
                  <div className="mt-2 text-sm">
                    <p className="whitespace-pre-wrap">{metadata.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <article className="wrapper mt-6 prose dark:prose-invert text-current">{children}</article>
    </Page>
  )
}
