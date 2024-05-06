import type { FC } from 'react'
import { Direction } from '../../types/direction'
import { Link } from '../link/link'
import { useTranslations } from 'next-intl'

export const Links: FC<{ direction?: Direction }> = ({ direction = Direction.HORIZONTAL }) => {
  const t = useTranslations()

  const links = direction === Direction.HORIZONTAL ? 'horizontal' : 'vertical'
  console.log(links)

  return (
    <div>
      <Link to={'/'} type={'navigation'}>
        <strong>{t('home.title')}</strong>
      </Link>
      <Link to={'/talks'} type={'navigation'}>
        {t('talks.title')}
      </Link>
      <Link to={'/about'} type={'navigation'}>
        {t('about.title')}
      </Link>
    </div>
  )
}
