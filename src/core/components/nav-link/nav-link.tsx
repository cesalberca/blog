'use client'

import type { FC, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import styles from './nav-link.module.css'
import { Link } from '@/core/components/link/link'
import { usePathname } from '@/core/i18n/routing'

export const NavLink: FC<
  PropsWithChildren<{
    href: string
    type?: 'menu' | 'navigation'
  }>
> = ({ href, type = 'navigation', children }) => {
  const currentPath = usePathname()

  return (
    <Link
      href={href}
      type="invisible"
      className={cn(
        'w-min',
        type === 'navigation' ? styles['nav-link'] : '',
        'font-medium  relative',
        `${currentPath === href ? 'font-bold text-foreground' : ''}`,
      )}
    >
      <span className="inline-block">{children}</span>
    </Link>
  )
}
