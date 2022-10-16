import type { FC } from 'react'
import styles from './links.module.scss'
import { bind } from '../../utils/bind'
import { Direction } from '../../types/direction'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'

const cx = bind(styles)

export const Links: FC<{ direction?: Direction }> = ({ direction = Direction.HORIZONTAL }) => {
  const t = useTranslations()

  const links = direction === Direction.HORIZONTAL ? 'horizontal' : 'vertical'

  return (
    <div className={cx('links', { [links]: true })}>
      <Link to={'/'} className={cx('home')} type={'navigation'}>
        {t('home.title')}
      </Link>
      <Link to={'/talks'} className={cx('link')} type={'navigation'}>
        {t('talks.title')}
      </Link>
      <Link to={'/about'} className={cx('link')} type={'navigation'}>
        {t('about.title')}
      </Link>
    </div>
  )
}
