import type { FC, PropsWithChildren } from 'react'
import styles from './hero.module.scss'
import { bind } from '../../utils/bind'

const cx = bind(styles)

export const Hero: FC<PropsWithChildren<{ image?: string; className?: string }>> = ({ image, className, children }) => {
  return (
    <div
      className={cx('image', { 'image-wrapper': image !== undefined }, className)}
      {...(image && { style: { backgroundImage: `url(${image})` } })}
    >
      <div className={cx('wrapper')}>{children}</div>
    </div>
  )
}
