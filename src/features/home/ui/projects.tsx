import type { FC } from 'react'
import styles from './projects.module.scss'
import { Card } from '../../../core/components/card/card'
import { Link } from '../../../core/components/link/link'
import { bind } from '../../../core/utils/bind'
import { Url } from '../../../core/types/url'
import { useTranslations } from 'next-intl'

const cx = bind(styles)

interface Project {
  title: string
  description: string
  link?: Url
  code: Url
}

export const Projects: FC = () => {
  const t = useTranslations()

  const projects: Project[] = [
    {
      title: t('home.projects.katasTitle'),
      description: t('home.projects.katasDescription'),
      code: Url.fromValue('https://github.com/cesalberca/katas'),
    },
    {
      title: t('home.projects.whoAmITitle'),
      description: t('home.projects.whoAmIDescription'),
      link: Url.fromValue('https://github.com/cesalberca/who-am-i'),
      code: Url.fromValue('https://who-am-i-e6a66.web.app/'),
    },
    {
      title: t('home.projects.frontendReformsTitle'),
      description: t('home.projects.frontendReformsDescription'),
      link: Url.fromValue('https://cesalberca.github.io/reformas-de-frontaneria/'),
      code: Url.fromValue('https://github.com/cesalberca/reformas-de-frontaneria'),
    },
  ]

  return (
    <div className={cx('projects')}>
      {projects.map(x => (
        <Card key={x.title} className={cx('projects__card')}>
          <h3 className={cx('projects__card__title')}>{x.title}</h3>
          <p className={cx('projects__card__description')}>{x.description}</p>
          <footer className={cx('projects__card__links')}>
            <Link to={x.code.value}>{t('home.projects.live')}</Link>
            {x.link?.value && (
              <Link key={x.title} to={x.code.value}>
                {t('home.projects.code')}
              </Link>
            )}
          </footer>
        </Card>
      ))}
    </div>
  )
}
