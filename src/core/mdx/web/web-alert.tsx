import type { PropsWithChildren } from 'react'
import { parseAdmonition } from '@/core/components/alert/parse-admonition'
import { IconAlert } from '@/core/components/alert/icon-alert'
import { cleanPrefix } from '@/core/components/alert/clean-prefix'
import { transformChildrenToString } from '@/core/mdx/utils/transform-children-to-string'

export function CustomAlert({ className, children }: HTMLQuoteElement & PropsWithChildren) {
  const allText = transformChildrenToString(children).trim()
  const parsed = parseAdmonition(allText)
  if (!parsed) {
    return <blockquote className={className}>{children}</blockquote>
  }

  return <IconAlert type={parsed.type}>{cleanPrefix(children)}</IconAlert>
}
