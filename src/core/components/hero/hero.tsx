import type { FC, PropsWithChildren } from 'react'
import styles from './hero.module.scss'
import { bind } from '../../utils/bind'

const cx = bind(styles)

export const Hero: FC<PropsWithChildren<{ image: string }>> = ({ image, children }) => {
  return (
    <div className={cx('image')} style={{ backgroundImage: `url(${image})` }}>
      <div className={cx('wrapper')}>{children}</div>
    </div>
  )
}
