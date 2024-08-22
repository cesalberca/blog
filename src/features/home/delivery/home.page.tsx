import { type FC, type PropsWithChildren } from 'react'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Markdown } from '../../../core/components/markdown/markdown'
import { Services } from './services'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { Hero } from '@/core/components/hero/hero'
import { ScrambleList } from '@/core/components/scramble-list/scramble-list'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'
import { ContactForm } from '@/features/home/delivery/contact'
import { OpenToWork } from '@/core/components/open-to-work/open-to-work'
import { Experience } from '@/features/home/delivery/experience'

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

export const HomePage: FC = () => {
  const t = useTranslations()

  const texts = [
    t('home.labels.architect'),
    t('home.labels.digitalNomad'),
    t('home.labels.internationalSpeaker'),
    t('home.labels.freelancer'),
    t('home.labels.podcastHost'),
  ]

  return (
    <Page top>
      <OpenToWork />
      <Hero image="/assets/images/me-no-bg.png" imageClassName="object-top md:object-contain pt-16 mx-auto max-w-xl">
        <header className="absolute inset-0 md:pt-[100px] flex flex-col justify-center wrapper">
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

      <Section title={t('home.projects.title')}>
        <Projects />
      </Section>

      <Section title={t('home.services.title')}>
        <Services />
      </Section>

      <Section title={t('home.experience.title')}>
        <div className="wrapper">
          <Experience />
        </div>
      </Section>

      <Section title={t('home.technologies.title')}>
        <div className="wrapper">
          <Markdown value={t('home.technologies.description')} className="mb-m" />
          <Technologies />
        </div>
      </Section>

      <Section title={t('home.contact.title')}>
        <div className="wrapper" id="contact-form">
          <div className="mb-s">
            <SocialMedia />
          </div>
          <ContactForm />
        </div>
      </Section>
    </Page>
  )
}
