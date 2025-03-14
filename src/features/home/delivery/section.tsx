import type { FC, PropsWithChildren } from 'react'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { cn } from '@/lib/utils'

export const Section: FC<
  PropsWithChildren<{
    title?: string
    id?: string
    fullWidth?: boolean
  }>
> = ({ children, title, id, fullWidth = false }) => {
  return (
    <section className="mt-m md:mt-xxl">
      {title && (
        <h2 id={id} className={cn('my-m', fullWidth ? 'full-width-section' : 'wrapper')}>
          <AccentText>{title}</AccentText>
        </h2>
      )}
      {children}
    </section>
  )
}
