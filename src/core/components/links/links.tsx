import type { FC } from 'react'
import styles from './links.module.scss'
import { bind } from '../../utils/bind'
import { Direction } from '../../types/direction'
import { Link } from '../link/link'

const cx = bind(styles)

export const Links: FC<{ direction?: Direction }> = ({ direction = Direction.HORIZONTAL }) => {
  return (
    <div className={cx('links', { [direction]: true })}>
      <Link to={'/'}>Home</Link>
      <Link to={'/talks'}>talks</Link>
      <Link to={'/about'}>about</Link>
    </div>
  )
}
