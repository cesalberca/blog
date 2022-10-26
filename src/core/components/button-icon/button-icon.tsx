import type { FC } from 'react'
import styles from './button-icon.module.scss'
import { bind } from '../../utils/bind'
import Image, { StaticImageData } from 'next/image'

const cx = bind(styles)

export const ButtonIcon: FC<{ icon: StaticImageData; onClick: () => void; alt: string }> = ({ icon, onClick, alt }) => {
  return (
    <button className={cx('button-icon')} onClick={onClick}>
      <Image className={cx('button-icon__image')} src={icon} alt={alt} />
    </button>
  )
}
