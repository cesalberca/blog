import type { PropsWithChildren } from 'react'
import { parseAdmonition } from '@/core/components/alert/parse-admonition'
import { cleanPrefix } from '@/core/components/alert/clean-prefix'
import { transformChildrenToString } from '@/core/mdx/utils/transform-children-to-string'
import { ImageAlert } from '@/core/components/alert/image-alert'
import { cn } from '@/lib/utils'

export function EmailAlert({ className, children }: HTMLQuoteElement & PropsWithChildren) {
  const allText = transformChildrenToString(children).trim()
  const parsed = parseAdmonition(allText)
  if (!parsed) {
    return (
      <blockquote
        className={cn(
          'bg-muted text-muted-foreground border-l-4 border-border border-solid rounded-lg p-2 pl-4 m-0 border-t-0 border-b-0 border-r-0',
          className,
        )}
      >
        {children}
      </blockquote>
    )
  }

  return <ImageAlert type={parsed.type}>{cleanPrefix(children)}</ImageAlert>
}
