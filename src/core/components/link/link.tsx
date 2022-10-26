import { FC, PropsWithChildren, useEffect, useState } from 'react'
import NextLink from 'next/link'
import styles from './link.module.scss'
import { bind } from '../../utils/bind'
import { useRouter } from 'next/router'

const cx = bind(styles)

interface Props {
  to: string
  type?: 'regular' | 'navigation' | 'invisible'
  className?: string
}

export const Link: FC<PropsWithChildren<Props>> = ({ to, children, className, type = 'regular' }) => {
  const { asPath, isReady } = useRouter()
  const [isActive, setIsActive] = useState(false)

  const isExternal = to !== undefined && /^http/.test(to)

  useEffect(() => {
    if (isReady && type === 'navigation') {
      const linkPathname = new URL(to ?? '', location.href).pathname
      const activePathname = new URL(asPath, location.href).pathname

      if (linkPathname === activePathname) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  }, [asPath, isReady, to, type])

  if (type === 'invisible') {
    return (
      <NextLink href={to} legacyBehavior passHref className={cx({ [type]: true }, 'link', className)}>
        <button className={cx('invisible')}>{children}</button>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={to}
      passHref
      tabIndex={1}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cx({ [type]: true }, 'link', { active: type === 'navigation' ? false : isActive }, className)}
    >
      {children}
    </NextLink>
  )
}
