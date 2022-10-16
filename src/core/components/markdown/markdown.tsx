import type { FC } from 'react'
import { useEffect } from 'react'
import styles from './markdown.module.scss'
import { Markdown as MarkdownDomain } from '../../markdown'
import { bind } from '../../utils/bind'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-jsx'

const cx = bind(styles)

export const Markdown: FC<{ value: string }> = ({ value }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [value])

  return (
    <div
      className={cx('markdown')}
      dangerouslySetInnerHTML={{ __html: MarkdownDomain.fromValue(value).toHtml() }}
    ></div>
  )
}
