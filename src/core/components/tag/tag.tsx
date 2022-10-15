import type { FC, PropsWithChildren } from 'react'
import styles from './tag.module.scss'
import { bind } from '../../utils/bind'

const cx = bind(styles)

export const Tag: FC<PropsWithChildren> = ({ children }) => {
  return <span className={cx('tag')}>{children}</span>
}
