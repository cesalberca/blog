'use client'

import type { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import styles from './nav-link.module.css'
import { Link } from '@/core/components/link/link'

export const NavLink: FC<
  PropsWithChildren<{
    to: string
    type?: 'menu' | 'navigation'
  }>
> = ({ to, type = 'navigation', children }) => {
  const currentPath = usePathname()

  return (
    <Link
      to={to}
      type="invisible"
      className={cn(
        type === 'navigation' ? styles['nav-link'] : '',
        'font-medium  relative',
        `${currentPath === to ? 'font-bold text-foreground' : ''}`,
      )}
    >
      <span className="inline-block">{children}</span>
    </Link>
  )
}
