import type { FC, PropsWithChildren } from 'react'
import styles from './hero.module.scss'
import { bind } from '../../utils/bind'
import Image from 'next/future/image'

const cx = bind(styles)

export const Hero: FC<PropsWithChildren<{ image?: string; className?: string }>> = ({ image, className, children }) => {
  return (
    <div className={cx('hero', className)}>
      {image && <Image className={cx('hero__image')} fill sizes={'100vw'} src={image} alt={''} />}
      <div className={cx('hero__wrapper')}>{children}</div>
    </div>
  )
}
