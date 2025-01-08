import { type FC, type PropsWithChildren } from 'react'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Technologies } from './technologies'
import { Projects } from './projects'
import { Markdown } from '../../../core/components/markdown/markdown'
import { Services } from './services'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { Hero } from '@/core/components/hero/hero'
import { AccentList } from '@/core/components/accent-list/accent-list'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { ContactForm } from '@/features/home/delivery/contact'
import { OpenToWork } from '@/core/components/open-to-work/open-to-work'
import { Testimonials } from '@/core/components/testimonials/testimonials'
import { cn } from '@/lib/utils'

export const Section: FC<
  PropsWithChildren<{
    title?: string
    id?: string
    fullWidth?: boolean
  }>
> = ({ children, title, id, fullWidth = false }) => {
  return (
    <section className="mt-m md:mt-xxl">
      {title && (
        <h2 id={id} className={cn('my-m', fullWidth ? 'full-width-section' : 'wrapper')}>
          <AccentText>{title}</AccentText>
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
          <h1 className="uppercase min-h-[6rem] flex items-end">
            <AccentList texts={texts} />
          </h1>
          <p>{t.rich('home.heroCaption')}</p>
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

      <Section title={t('home.projects.title')} id="projects">
        <Projects />
      </Section>

      <Section title={t('home.services.title')} id="services">
        <Services />
      </Section>

      <Section title={t('home.technologies.title')} id="technologies">
        <div className="wrapper">
          <Markdown value={t('home.technologies.description')} className="mb-m" />
          <Technologies />
        </div>
      </Section>

      <Section title={t('home.testimonials.title')} id="testimonials">
        <Testimonials itemsPerPage={1} />
      </Section>

      <Section title={t('home.contact.title')} id="contact">
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
