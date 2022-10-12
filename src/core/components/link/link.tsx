import { FC, PropsWithChildren, useEffect, useState } from 'react'
import NextLink from 'next/link'
import styles from './link.module.scss'
import { bind } from '../../utils/bind'
import { useRouter } from 'next/router'

const cx = bind(styles)

interface Props {
  to: string
  onClick?(): void
  type?: 'regular' | 'navigation' | 'invisible'
}

export const Link: FC<PropsWithChildren<Props>> = ({ to, children, onClick, type = 'regular' }) => {
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

  return (
    <NextLink href={to} passHref>
      <a
        {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
        className={cx({ [type]: true }, 'link', { active: type === 'navigation' ? false : isActive })}
        onClick={onClick}
      >
        {children}
      </a>
    </NextLink>
  )
}
