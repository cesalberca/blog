import type { FC, PropsWithChildren } from 'react'
import styles from './talk-section.module.scss'
import { bind } from '../../../../core/utils/bind'

const cx = bind(styles)

export const TalkSection: FC<PropsWithChildren<{ title: string; description?: string }>> = ({
  title,
  description,
  children,
}) => {
  return (
    <section>
      <h3 className={cx('title')}>
        <strong>{title}</strong>
      </h3>
      {description !== undefined ? <p>{description}</p> : children}
    </section>
  )
}
