import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type Type = 'soon' | 'new'

export const StatusText: FC<{ type: Type }> = ({ type }) => {
  const t = useTranslations('common.statusText')
  const statusVariants = cva('ml-1 text-muted-foreground/90 align-super text-[8px]', {
    variants: {
      type: {
        soon: 'text-yellow-300',
        new: 'text-green-300',
      },
    },
  })

  return <span className={cn(statusVariants({ type }))}>{t(type)}</span>
}
