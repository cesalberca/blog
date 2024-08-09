import type { FC } from 'react'
import { Url } from '../../../core/types/url'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { TiltCard } from '@/core/components/tilt-card/tilt-card'
import { Markdown } from '@/core/components/markdown/markdown'
import { Technologies } from '@/features/home/ui/technologies'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  link?: Url
  code: Url
  image: string
  technologies: string[]
}

export const Projects: FC = () => {
  const t = useTranslations()

  const projects: Project[] = [
    {
      title: t('home.projects.katasTitle'),
      description: t('home.projects.katasDescription'),
      code: Url.fromValue('https://github.com/cesalberca/katas'),
      image: '/assets/images/katas.png',
      technologies: ['React', 'TypeScript', 'Jest', 'TDD', 'Testing'],
    },
    {
      title: t('home.projects.archimedesJs'),
      description: t('home.projects.archimedesJsDescription'),
      link: Url.fromValue('https://archimedesfw.io/'),
      code: Url.fromValue('https://github.com/archimedes-projects/archimedes-js/'),
      image: '/assets/images/archimedesjs.png',
      technologies: ['TypeScript', 'Jest', 'Architecture', 'Isomorphic'],
    },
    {
      title: t('home.projects.blog'),
      description: t('home.projects.blogDescription'),
      code: Url.fromValue('https://github.com/cesalberca/blog'),
      link: Url.fromValue('https://cesalberca.com/'),
      image: '/assets/images/blog.png',
      technologies: ['React', 'TypeScript', 'Jest', 'NextJS'],
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      <p className="wrapper">{t('home.projects.description')}</p>
      <section className="mt-xxl flex flex-col gap-20 bleed-width-section">
        {projects.map((x, i) => (
          <div
            key={x.title}
            className={cn('flex flex-col md:flex-row gap-m items-center', { 'flex-row-reverse': i % 2 !== 0 })}
          >
            <TiltCard className="flex-2" defaultTiltX={i % 2 !== 0 ? 5 : 5} defaultTiltY={i % 2 === 0 ? 30 : -30}>
              <Image src={x.image} alt={x.title} width={300} height={200} layout="responsive" />
              <footer
                className="flex gap-4 justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(100px) translateY(-10px)',
                }}
              >
                <Button asChild className="drop-shadow">
                  <Link href={x.code.value}>{t('home.projects.live')}</Link>
                </Button>
                {x.link?.value && (
                  <Button asChild className="drop-shadow">
                    <Link href={x.code.value}>{t('home.projects.code')}</Link>
                  </Button>
                )}
              </footer>
            </TiltCard>
            <aside className="flex-1">
              <h3>{x.title}</h3>
              <Markdown value={x.description}></Markdown>
              <div className="pt-m">
                <Technologies technologies={x.technologies} />
              </div>
            </aside>
          </div>
        ))}
      </section>
    </div>
  )
}
