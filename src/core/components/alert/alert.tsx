import { cn } from '@/lib/utils'
import type { FC, PropsWithChildren, ReactNode } from 'react'

export const Alert: FC<PropsWithChildren<{ icon: ReactNode; className?: string }>> = ({
  icon,
  children,
  className,
}) => {
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

      <div className={cn('rounded-lg border-l-2 border-current p-6')}>
        <div className="text-base leading-relaxed text-foreground/90 not-prose">{children}</div>
      </div>
    </div>
  )
}
