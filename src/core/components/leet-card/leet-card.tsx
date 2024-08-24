'use client'

import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'
import { LeetBackground } from '@/core/components/leet-background/leet-background'
import { cn } from '@/lib/utils'

export const LeetCard: FC<PropsWithChildren<{ center: ReactNode; className?: string }>> = ({
  children,
  center,
  className,
}) => {
  return (
    <div className={cn('grid p-m gap-4', className)}>
      <div className="[aspect-ratio:1] bg-background">
        <LeetBackground>{center}</LeetBackground>
      </div>
      {children}
    </div>
  )
}
