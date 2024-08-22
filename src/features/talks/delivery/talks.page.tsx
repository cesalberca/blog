import { getTalks } from '../../../talks'
import type { FC } from 'react'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'

export const TalksPage: FC = async () => {
  const allTalks = await getTalks()
  const t = await getTranslations()

  return (
    <Page>
      <div className="bleed-width-section">
        <h1>{t('talks.title')}</h1>
        <section className="columns-1 md:columns-3 gap-4">
          {allTalks.map(talk => (
            <div key={talk.title} className="mb-4 break-inside-avoid">
              <TiltCard>
                <Image
                  src={`/assets/images/talks/${talk.image}`}
                  width={300}
                  height={200}
                  alt=""
                  className="w-full h-auto"
                />
                <section className="p-m">
                  <h2 className="mb-s">{talk.title}</h2>
                  <Markdown value={''}></Markdown>
                </section>
              </TiltCard>
            </div>
          ))}
        </section>
      </div>
    </Page>
  )
}
