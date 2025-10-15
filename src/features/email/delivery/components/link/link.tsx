import { type FC, type PropsWithChildren } from 'react'
import { Link as EmailLink } from '@react-email/link'
import { cn } from '@/lib/utils'

export const Link: FC<PropsWithChildren<{ className?: string; href?: string }>> = ({ href, children, className }) => {
  return (
    <EmailLink className={cn('text-primary underline', className)} href={href}>
      {children}
    </EmailLink>
  )
}
