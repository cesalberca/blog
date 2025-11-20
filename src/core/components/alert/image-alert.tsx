import type { FC, PropsWithChildren } from 'react'
import { type AlertType, getAlertImage } from './alert-config'
import { cn } from '@/lib/utils'
import { Img, Section } from '@react-email/components'

export const ImageAlert: FC<
  PropsWithChildren<{
    type: AlertType
  }>
> = ({ type, children }) => {
  const alertImage = getAlertImage(type, 'png')
  const alertConfig: Record<AlertType, { color: string; borderColor: string; bgColor: string; textColor: string }> = {
    note: {
      color: 'text-blue-500',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
    },
    tip: {
      color: 'text-emerald-500',
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
    },
    important: {
      color: 'text-purple-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
    },
    warning: {
      color: 'text-amber-500',
      borderColor: 'border-amber-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
    },
    caution: {
      color: 'text-red-500',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-400',
    },
  }
  const config = alertConfig[type]

  return (
    <Section className={cn('relative')}>
      <Section
        className={cn(
          'absolute left-0 top-0 -translate-x-[50%] flex h-10 w-10 items-center justify-center rounded-md border-2 bg-background',
          config.borderColor,
          config.color,
        )}
      >
        {<Img src={alertImage} alt="" width="20" height="20" />}
      </Section>

      <Section className={cn('rounded-lg border-l-2 p-6', config.bgColor, config.borderColor)}>
        <Section className="text-base leading-relaxed text-foreground/90 not-prose">{children}</Section>
      </Section>
    </Section>
  )
}
