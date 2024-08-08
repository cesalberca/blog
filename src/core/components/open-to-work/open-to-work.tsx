import { type FC } from 'react'
import { CircleText } from '@/core/components/open-to-work/circle-text'
import { useTranslations } from 'next-intl'

export const OpenToWork: FC = () => {
  const t = useTranslations()
  return (
    <div className="fixed bottom-5 left-5">
      <CircleText text={t('common.openToWork')} />
    </div>
  )
}
