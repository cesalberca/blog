import type { FC } from 'react'
import { useEffect } from 'react'
import { Markdown as MarkdownDomain } from '../../markdown'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-jsx'

export const Markdown: FC<{ value: string }> = ({ value }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [value])

  return <div dangerouslySetInnerHTML={{ __html: MarkdownDomain.fromValue(value).toHtml() }}></div>
}
