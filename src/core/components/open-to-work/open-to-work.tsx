import { type FC } from 'react'
import { CircleText } from '@/core/components/open-to-work/circle-text'
import { useTranslations } from 'next-intl'

export const OpenToWork: FC = () => {
  const t = useTranslations()
  return (
    <div className="fixed z-10 bottom-0 left-0 mx-2 my-4">
      <CircleText text={t('common.openToWork')} />
    </div>
  )
}
