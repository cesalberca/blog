import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'

export const Service: FC<PropsWithChildren<{ center: ReactNode; className?: string }>> = ({
  children,
  center,
  className,
}) => {
  return (
    <div className={cn('grid p-m gap-4', className)}>
      <div className="[aspect-ratio:1] bg-background">
        <Background>{center}</Background>
      </div>
      {children}
    </div>
  )
}
