import { type FC, type PropsWithChildren } from 'react'
import type { Article } from '../../articles/domain/article'
import { ArticleExcerpt } from './article-excerpt'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Link } from '../../../core/components/link/link'
import { Markdown } from '../../../core/components/markdown/markdown'
import { Services } from './services'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { Hero } from '@/core/components/hero/hero'
import { ScrambleList } from '@/core/components/scramble-list/scramble-list'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/features/home/ui/contact'
import { OpenToWork } from '@/core/components/open-to-work/open-to-work'
import { Experience } from '@/features/home/ui/experience'

export const Section: FC<
  PropsWithChildren<{
    title?: string
  }>
> = ({ children, title }) => {
  return (
    <section className="mt-m md:mt-xxl">
      {title && (
        <h2 className="my-m wrapper">
          <ScrambleText>{title}</ScrambleText>
        </h2>
      )}
      {children}
    </section>
  )
}

export const HomePage: FC<{ articles: Article[] }> = ({ articles }) => {
  const t = useTranslations()

  const texts = [
    t('home.labels.architect'),
    t('home.labels.digitalNomad'),
    t('home.labels.internationalSpeaker'),
    t('home.labels.freelancer'),
    t('home.labels.podcastHost'),
  ]

  return (
    <Page>
      <OpenToWork />
      <Hero image="/assets/images/me.png">
        <header className="absolute inset-0 p-m flex flex-col justify-center">
          <h2 className="uppercase text-4xl leading-tight min-h-[6rem] flex items-end">
            <ScrambleList texts={texts} />
          </h2>
          <h6>{t.rich('home.heroCaption')}</h6>
          <section className="mt-xs text-xs">
            <SocialMedia />
          </section>
        </header>
      </Hero>

      <Section>
        <div className="wrapper">
          <Markdown value={t('home.whoAmI')} />
        </div>
      </Section>

      <Section title={t('home.experience.title')}>
        <div className="wrapper">
          <Experience />
        </div>
      </Section>

      <Section title={t('home.services.title')}>
        <Services />
      </Section>

      <Section title={t('home.projects.title')}>
        <Projects />
      </Section>

      <Section title={t('home.technologies')}>
        <div className="wrapper">
          <Technologies />
        </div>
      </Section>

      <Section title={t('home.contact.title')}>
        <div className="wrapper" id="contact-form">
          <ContactForm />
        </div>
      </Section>
    </Page>
  )
}
