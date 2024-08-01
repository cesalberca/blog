'use client'

import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'
import { LeetBackground } from '@/core/components/leet-card/leet-background'

export const LeetCard: FC<PropsWithChildren<{ center: ReactNode }>> = ({ children, center }) => {
  return (
    <div className="grid grid-col-1 border bg-background">
      <div className="grid p-m gap-4 bg-background">
        <LeetBackground>{center}</LeetBackground>
        {children}
      </div>
    </div>
  )
}
