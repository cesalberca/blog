import type { FC, PropsWithChildren } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { cn } from '@/lib/utils'

export const Section: FC<
  PropsWithChildren<{
    className?: string
    title?: string
    id?: string
    fullWidth?: boolean
  }>
> = ({ children, title, id, className, fullWidth = false }) => {
  return (
    <section className={cn('mt-6 md:mt-14', className)}>
      {title && (
        <h2 id={id} className={cn('my-6', fullWidth ? 'full-width-section' : 'wrapper')}>
          <AccentText>{title}</AccentText>
        </h2>
      )}
      {children}
    </section>
  )
}
