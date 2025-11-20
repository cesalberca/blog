import type { FC } from 'react'
import { Experience } from '@/features/home/delivery/experience'
import { useTranslations } from 'next-intl'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Page } from '@/core/components/page/page'

export const ExperiencePage: FC = () => {
  const t = useTranslations()
  return (
    <Page>
      <div className="wrapper">
        <h1 className="my-4">
          <AccentText>{t('experience.title')}</AccentText>
        </h1>
        <Experience />
      </div>
    </Page>
  )
}
