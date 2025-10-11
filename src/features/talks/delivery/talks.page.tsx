import { getTalks } from '../../../talks'
import type { FC } from 'react'
import { AccentCard } from '@/core/components/accent-card/accent-card'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { Link } from '@/core/components/link/link'
import { Masonry } from '@/core/components/masonry/masonry'
import { Badge } from '@/components/ui/badge'
import { Locale } from '@/core/i18n/locale'

export const TalksPage: FC<{ locale: Locale }> = async ({ locale }) => {
  const allTalks = await getTalks({ locale })
  const t = await getTranslations()

  return (
    <Page>
      <h1 className="wrapper mb-4">{t('talks.title')}</h1>
      <Masonry>
        {allTalks.map(talk => (
          <Link type="invisible" className="w-full" key={talk.slug} href={`/talks/${talk.slug}`}>
            <div className="mb-4">
              <AccentCard>
                <Image
                  src={`/assets/images/talks/${talk.image}`}
                  width={300}
                  height={200}
                  alt=""
                  className="w-full h-auto"
                />
                <section className="p-4">
                  <h4 className="mb-2">{talk.title}</h4>

                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge variant="secondary" className="mr-1">
                      {talk.length} {typeof talk.length === 'number' ? 'minutes' : ''}
                    </Badge>
                    <Badge variant="secondary" className="mr-1">
                      {talk.difficulty}
                    </Badge>
                    {talk.categories.map(category => (
                      <Badge key={category} className="mr-1">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {talk.abstract && <p className="text-sm text-muted-foreground line-clamp-3 mt-2">{talk.abstract}</p>}
                </section>
              </AccentCard>
            </div>
          </Link>
        ))}
      </Masonry>
    </Page>
  )
}
