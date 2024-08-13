import type { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
  to: string
  type?: 'regular' | 'navigation' | 'invisible'
  className?: string
}

export const Link: FC<PropsWithChildren<Props>> = ({ to, children, className, type = 'regular' }) => {
  const isExternal = to !== undefined && /^http/.test(to)

  if (type === 'invisible') {
    return (
      <NextLink href={to} legacyBehavior passHref className={className}>
        <button className="text-base">{children}</button>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={to}
      passHref
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cn('underline', className)}
    >
      {children}
    </NextLink>
  )
}
