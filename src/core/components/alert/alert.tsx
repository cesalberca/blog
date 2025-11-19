import { AlertCircle, Info, Lightbulb, OctagonAlert, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FC, ReactNode } from 'react'

type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution'

const alertConfig = {
  note: {
    icon: Info,
    label: 'NOTE',
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    textColor: 'text-blue-400',
  },
  tip: {
    icon: Lightbulb,
    label: 'TIP',
    borderColor: 'border-l-emerald-500',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    textColor: 'text-emerald-400',
  },
  important: {
    icon: AlertCircle,
    label: 'IMPORTANT',
    borderColor: 'border-l-purple-500',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    textColor: 'text-purple-400',
  },
  warning: {
    icon: TriangleAlert,
    label: 'WARNING',
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    textColor: 'text-amber-400',
  },
  caution: {
    icon: OctagonAlert,
    label: 'CAUTION',
    borderColor: 'border-l-red-500',
    bgColor: 'bg-red-500/10',
    iconColor: 'text-red-500',
    textColor: 'text-red-400',
  },
}

export const Alert: FC<{ type: AlertType; children: ReactNode; className?: string }> = ({
  type,
  children,
  className,
}) => {
  const config = alertConfig[type]
  const Icon = config.icon

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'absolute left-0 top-0 -translate-x-[50%] flex h-10 w-10 items-center justify-center rounded-md border-2 bg-background',
          config.iconColor,
          'border-current',
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div
        className={cn(
          'rounded-lg border-l-2 p-6',
          config.borderColor.replace('border-l-', 'border-l-'),
          config.bgColor,
        )}
      >
        <div className="text-base leading-relaxed text-foreground/90 not-prose">{children}</div>
      </div>
    </div>
  )
}
