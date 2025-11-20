import { cn } from '@/lib/utils'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import type { AlertType } from '@/core/components/alert/alert-config'

export const Alert: FC<PropsWithChildren<{ icon: ReactNode; className?: string; type: AlertType }>> = ({
  icon,
  children,
  type,
  className,
}) => {
  const alertConfig: Record<AlertType, { borderColor: string; bgColor: string; textColor: string }> = {
    note: {
      borderColor: 'border-l-blue-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
    },
    tip: {
      borderColor: 'border-l-emerald-500',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
    },
    important: {
      borderColor: 'border-l-purple-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
    },
    warning: {
      borderColor: 'border-l-amber-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
    },
    caution: {
      borderColor: 'border-l-red-500',
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-400',
    },
  }
  const config = alertConfig[type]

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'absolute left-0 top-0 -translate-x-[50%] flex h-10 w-10 items-center justify-center rounded-md border-2 bg-background',
          'border-current',
        )}
      >
        {icon}
      </div>

      <div className={cn('rounded-lg border-l-2 border-current p-6', config.bgColor, config.borderColor)}>
        <div className="text-base leading-relaxed text-foreground/90 not-prose">{children}</div>
      </div>
    </div>
  )
}
