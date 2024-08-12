import { getTalks } from '../utils-talks'
import type { FC } from 'react'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import Image from 'next/image'
import { Markdown } from '@/core/components/markdown/markdown'
import { useTranslations } from 'next-intl'

export const Talks: FC = () => {
  const allTalks = getTalks()
  const t = useTranslations()

  return (
    <div className="bleed-width-section">
      <h1>{t('talks.title')}</h1>
      <section className="columns-1 md:columns-3 gap-4">
        {allTalks.map(post => (
          <div key={post.slug} className="mb-4 break-inside-avoid">
            <TiltCard>
              <Image
                src={`/assets/images/talks/${post.metadata.image}`}
                width={300}
                height={200}
                alt=""
                className="w-full h-auto"
              />
              <section className="p-m">
                <h2 className="mb-s">{post.metadata.title}</h2>
                <Markdown value={post.content}></Markdown>
              </section>
            </TiltCard>
          </div>
        ))}
      </section>
    </div>
  )
}
