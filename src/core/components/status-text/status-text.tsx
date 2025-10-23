import { type FC } from 'react'
import { useTranslations } from 'next-intl'

export const StatusText: FC<{ type: 'soon' | 'new' }> = ({ type }) => {
  const t = useTranslations('common.statusText')

  return <span className="ml-1 text-muted-foreground/90 align-super text-[8px]">{t(type)}</span>
}
