import React from 'react'
import { useTranslations } from 'next-intl'

export const KoFiButton: React.FC = () => {
  const t = useTranslations()

  return (
    <a href="https://ko-fi.com/cesalberca" target="_blank" className="mt-10 tip tip-sm mr-4" rel="noopener noreferrer">
      <span className="tip-bg" />
      {t('common.kofi')}
    </a>
  )
}
