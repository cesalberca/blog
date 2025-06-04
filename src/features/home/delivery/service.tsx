import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'

export const Service: FC<PropsWithChildren<{ center: ReactNode; className?: string }>> = ({
  children,
  center,
  className,
}) => {
  return (
    <div className={cn('grid p-6 gap-4 rounded-lg', className)}>
      <div className="[aspect-ratio:1] bg-background rounded-lg overflow-hidden">
        <Background className="h-full flex items-center justify-center">{center}</Background>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
