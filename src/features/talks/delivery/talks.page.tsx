import { getTalks } from '../domain/talks'
import type { FC } from 'react'
import { AccentCard } from '@/core/components/accent-card/accent-card'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { Link } from '@/core/components/link/link'
import { Masonry } from '@/core/components/masonry/masonry'
import { Badge } from '@/components/ui/badge'

export const TalksPage: FC = async () => {
  const allTalks = await getTalks()
  const t = await getTranslations()

  return (
    <Page>
      <h1 className="wrapper mb-m">{t('talks.title')}</h1>
      <Masonry>
        {allTalks.map(talk => (
          <Link type="invisible" className="w-full" key={talk.slug} to={`/src/app/%5Blocale%5D/talks/${talk.slug}`}>
            <div className="mb-4 break-inside-avoid">
              <AccentCard>
                <Image
                  src={`/assets/images/talks/${talk.image}`}
                  width={300}
                  height={200}
                  alt=""
                  className="w-full h-auto"
                />
                <section className="p-m">
                  <h4 className="mb-s">{talk.title}</h4>
                  {talk.categories.map(category => (
                    <Badge key={category} className="mr-xxs">
                      {category}
                    </Badge>
                  ))}
                </section>
              </AccentCard>
            </div>
          </Link>
        ))}
      </Masonry>
    </Page>
  )
}
