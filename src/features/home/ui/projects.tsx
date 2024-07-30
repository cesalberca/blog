import type { FC } from 'react'
import { Card } from '../../../core/components/card/card'
import { Link } from '../../../core/components/link/link'
import { Url } from '../../../core/types/url'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import { Markdown } from '@/core/components/markdown/markdown'
import { Technologies } from '@/features/home/ui/technologies'

interface Project {
  title: string
  description: string
  link?: Url
  code: Url
  image: string
}

export const Projects: FC = () => {
  const t = useTranslations()

  const projects: Project[] = [
    {
      title: t('home.projects.katasTitle'),
      description: t('home.projects.katasDescription'),
      code: Url.fromValue('https://github.com/cesalberca/katas'),
      image: '/assets/images/katas.png',
    },
    {
      title: t('home.projects.whoAmITitle'),
      description: t('home.projects.whoAmIDescription'),
      link: Url.fromValue('https://github.com/cesalberca/who-am-i'),
      code: Url.fromValue('https://who-am-i-e6a66.web.app/'),
      image: '/assets/images/katas.png',
    },
    {
      title: t('home.projects.frontendReformsTitle'),
      description: t('home.projects.frontendReformsDescription'),
      link: Url.fromValue('https://cesalberca.github.io/reformas-de-frontaneria/'),
      code: Url.fromValue('https://github.com/cesalberca/reformas-de-frontaneria'),
      image: '/assets/images/katas.png',
    },
  ]

  return (
    <div>
      {projects.map((x, i) => (
        <div key={x.title} className={cn('flex full-width-section gap-m', i % 2 !== 0 ? 'flex-row-reverse' : '')}>
          <TiltCard className="flex-2" defaultTiltX={i % 2 !== 0 ? 5 : 5} defaultTiltY={i % 2 === 0 ? 30 : -30}>
            <Image src={x.image} alt={x.title} width={600} height={400} />
            <footer>
              <Link to={x.code.value}>{t('home.projects.live')}</Link>
              {x.link?.value && (
                <Link key={x.title} to={x.code.value}>
                  {t('home.projects.code')}
                </Link>
              )}
            </footer>
          </TiltCard>
          <aside className="flex-1">
            <h3>{x.title}</h3>
            <Markdown value={x.description}></Markdown>
            <Technologies />
          </aside>
        </div>
      ))}
    </div>
  )
}
