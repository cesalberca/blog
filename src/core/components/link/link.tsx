import type { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

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
    <NextLink
      href={to}
      passHref
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cn(linkVariants({ type }), className)}
    >
      {children}
    </NextLink>
  )
}
