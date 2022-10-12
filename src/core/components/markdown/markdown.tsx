import { FC } from 'react'
import styles from './markdown.module.scss'
import { Markdown as MarkdownDomain } from '../../../features/blog/domain/markdown'
import { bind } from '../../utils/bind'

const cx = bind(styles)

export const Markdown: FC<{ value: string }> = ({ value }) => {
  return (
    <div
      className={cx('markdown')}
      dangerouslySetInnerHTML={{ __html: MarkdownDomain.fromValue(value).toHtml() }}
    ></div>
  )
}
