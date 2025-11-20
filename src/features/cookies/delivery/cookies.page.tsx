import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Page } from '@/core/components/page/page'
import { Markdown } from '@/core/components/markdown/markdown'

export const CookiesPage: FC = () => {
  const t = useTranslations()
  return (
    <Page>
      <div className="wrapper">
        <h1 className="my-4">
          <AccentText>{t('cookies.title')}</AccentText>
        </h1>
        <div className="prose prose-invert max-w-none">
          <Markdown value={t('cookies.fullContent')} />
        </div>
      </div>
    </Page>
  )
}
