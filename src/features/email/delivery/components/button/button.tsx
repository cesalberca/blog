import { type FC, type PropsWithChildren } from 'react'
import { Button as EmailButton } from '@react-email/button'
import { cn } from '@/lib/utils'

export const Button: FC<PropsWithChildren<{ className?: string; link?: string }>> = ({ link, children, className }) => {
  return (
    <EmailButton className={cn('p-4 text-white font-mono text-sm bg-black border-2', className)} href={link}>
      {children}
    </EmailButton>
  )
}
