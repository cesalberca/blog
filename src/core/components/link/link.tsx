import type { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'

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
        <button>{children}</button>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={to}
      passHref
      tabIndex={1}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={className}
    >
      {children}
    </NextLink>
  )
}
