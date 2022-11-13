import type { FC, PropsWithChildren } from 'react'
import styles from './card.module.scss'
import { bind } from '../../utils/bind'

const cx = bind(styles)

export const Card: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
  return <div className={cx('card', className)}>{children}</div>
}
