import type { FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Page } from '@/core/components/page/page'
import { Hero } from '@/core/components/hero/hero'
import { AccentList } from '@/core/components/accent-list/accent-list'
import { SocialMedia } from '@/core/components/social-media/social-media'
import { RichText } from '@/core/components/rich-text/rich-text'
import { Section } from '@/features/home/delivery/section'
import { Markdown } from '@/core/components/markdown/markdown'
import { Projects } from '@/features/home/delivery/projects'
import { Services } from '@/features/home/delivery/services'
import { Technologies } from '@/features/home/delivery/technologies'
import { ContactForm } from '@/features/home/delivery/contact'
import { OpenToWork } from '@/core/components/open-to-work/open-to-work'
import { Testimonials } from '@/core/components/testimonials/testimonials'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Locale } from '@/core/i18n/locale'
import { Newsletter } from '@/core/components/newsletter/newsletter'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { PostMetadata } from '@/features/posts/domain/post-metadata'

export const HomePage: FC<{ latestPost: PostMetadata }> = ({ latestPost }) => {
  const t = useTranslations()
  const locale = useLocale() as Locale

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
          <RichText>{tags => t.rich('home.heroCaption', tags)}</RichText>
          <section className="mt-2 text-xs">
            <SocialMedia />
          </section>
        </header>
      </Hero>

      <Section>
        <div className="wrapper">
          <Markdown value={t('home.whoAmI')} />
        </div>
      </Section>

      <Section>
        <div className="wrapper">
          <Newsletter />
        </div>
      </Section>

      <Section title={t('home.services.title')} id="services">
        <div className="flex flex-col gap-8">
          <Services />
          <div className="wrapper mt-8">
            <Button size="lg" className="mb-12">
              <Link to="/services" type="invisible">
                {t('home.services.readyToWork')}
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section title={t('home.projects.title')} id="projects">
        <Projects />
      </Section>

      <Section title={t('home.latestArticles')}>
        <div className="wrapper">
          <PostExcerpt post={latestPost} />
          <div className="mt-6 flex justify-center">
            <Button size="lg" asChild>
              <Link to="/blog" type="invisible">
                {t('home.viewAllArticles')}
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section title={t('caseStudies.title')} id="case-studies">
        <div className="flex flex-col gap-4">
          <div className="wrapper">
            <p className="mb-4 text-lg">{t('caseStudies.description')}</p>
          </div>
          <div className="bleed-width-section grid md:grid-cols-2 gap-2">
            <CaseStudyCard
              title={t('caseStudies.tabaiba.title')}
              description={t('caseStudies.tabaiba.description')}
              href={CASE_STUDY_URLS[locale].tabaiba}
            />
            <CaseStudyCard
              title={t('caseStudies.useCases.title')}
              description={t('caseStudies.useCases.description')}
              href={CASE_STUDY_URLS[locale].halioooo}
            />
          </div>
        </div>
      </Section>

      <Section title={t('home.technologies.title')} id="technologies">
        <div className="wrapper">
          <Markdown value={t('home.technologies.description')} className="mb-4" />
          <Technologies />
        </div>
      </Section>

      <Section title={t('home.testimonials.title')} id="testimonials">
        <Testimonials itemsPerPage={1} />
      </Section>

      <Section title={t('home.contact.title')} id="contact">
        <div className="wrapper" id="contact-form">
          <div className="mb-4">
            <SocialMedia />
          </div>
          <ContactForm />
        </div>
      </Section>
    </Page>
  )
}
