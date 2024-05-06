import type { FC } from 'react'
import { Card } from '../../../core/components/card/card'
import { Link } from '../../../core/components/link/link'
import { Url } from '../../../core/types/url'
import { useTranslations } from 'next-intl'

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
    <div>
      {projects.map(x => (
        <Card key={x.title}>
          <h3>{x.title}</h3>
          <p>{x.description}</p>
          <footer>
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
