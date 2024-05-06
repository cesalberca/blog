import { FC, PropsWithChildren, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  to: string
  type?: 'regular' | 'navigation' | 'invisible'
  className?: string
}

export const Link: FC<PropsWithChildren<Props>> = ({ to, children, className, type = 'regular' }) => {
  const { asPath, isReady } = useRouter()
  const [_isActive, setIsActive] = useState(false)

  const isExternal = to !== undefined && /^http/.test(to)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(to as string, location.href).pathname
      const activePathname = new URL(asPath, location.href).pathname

      setIsActive(linkPathname === activePathname)
    }
  }, [asPath, isReady, to])

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
