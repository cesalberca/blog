import type { FC } from 'react'
import { Markdown } from '../../../core/components/markdown/markdown'
import { useTranslations } from 'next-intl'

export const AboutPage: FC = () => {
  const t = useTranslations()
  return (
    <>
      <h1>{t('about.title')}</h1>
      <Markdown value={t('about.description')}></Markdown>
    </>
  )
}
