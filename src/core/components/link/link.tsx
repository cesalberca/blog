import type { FC, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Link as LocaleLink } from '@/core/i18n/routing'

interface Props {
  to: string
  type?: 'navigation' | 'invisible'
  className?: string
}

const linkVariants = cva('underline', {
  variants: {
    type: {
      invisible: 'no-underline',
      navigation: 'no-underline',
    },
  },
})

export const Link: FC<PropsWithChildren<Props>> = ({ to, children, className, type }) => {
  const isExternal = to !== undefined && /^http/.test(to)

  return (
    <LocaleLink
      href={to}
      passHref
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cn(linkVariants({ type }), className)}
    >
      {children}
    </LocaleLink>
  )
}
