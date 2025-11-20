import { Link as WebLink } from '@/core/components/link/link'
import type { LinkHTMLAttributes, PropsWithChildren } from 'react'

export function CustomWebLink(
  props: LinkHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{ href: string }>,
) {
  return (
    <WebLink href={props.href} className={props.className ?? ''}>
      {props.children}
    </WebLink>
  )
}
