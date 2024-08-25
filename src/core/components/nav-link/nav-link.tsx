'use client'

import type { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import styles from './nav-link.module.css'

export const NavLink: FC<
  PropsWithChildren<{
    to: string
  }>
> = ({ to, children }) => {
  const currentPath = usePathname()

  return (
    <Link
      href={to}
      className={cn(
        styles['nav-link'],
        'font-medium  relative',
        `${currentPath === to ? 'font-bold text-foreground' : ''}`,
      )}
    >
      <span className="inline-block">{children}</span>
    </Link>
  )
}
