import type { FC } from 'react'
import { Markdown as MarkdownDomain } from '../../markdown'

export const Markdown: FC<{ value: string }> = ({ value }) => {
  return <div dangerouslySetInnerHTML={{ __html: MarkdownDomain.fromValue(value).value }}></div>
}
