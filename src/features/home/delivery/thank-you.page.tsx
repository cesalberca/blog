import { Link } from '@/core/components/link/link'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { YouTubeEmbed } from '@next/third-parties/google'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { AccentText } from '@/core/components/accent-text/accent-text'
import type { FC } from 'react'
import type { PostMetadata } from '@/features/posts/domain/post-metadata'
import { Locale } from '@/core/i18n/locale'
import { Section } from '@/features/home/delivery/section'
import { Testimonials } from '@/core/components/testimonials/testimonials'

export const ThankYouPage: FC<{ post: PostMetadata; locale: Locale }> = async ({ post, locale }) => {
  const t = await getTranslations()

  return (
    <Page>
      <Section>
        <div className="text-center space-y-4">
          <h1>
            <AccentText>{t('thankYou.title')}</AccentText>
          </h1>
          <p>{t('thankYou.description')}</p>
        </div>
      </Section>

      <Section title={t('thankYou.caseStudies.title')}>
        <div className="wrapper">
          <p className="mb-6">{t('thankYou.caseStudies.description')}</p>
        </div>
        <div className="bleed-width-section grid gap-6 md:grid-cols-3">
          <CaseStudyCard
            title={t('caseStudies.tabaiba.title')}
            descriptionKey={'caseStudies.tabaiba.description'}
            href={CASE_STUDY_URLS[locale].tabaiba}
            image="/assets/images/case-studies/tabaiba.jpg"
          />
          <CaseStudyCard
            title={t('caseStudies.halioooo.title')}
            descriptionKey={'caseStudies.halioooo.description'}
            href={CASE_STUDY_URLS[locale].halioooo}
            image="/assets/images/case-studies/halioooo.png"
          />
          <CaseStudyCard
            title={t('caseStudies.lightspace.title')}
            descriptionKey={'caseStudies.lightspace.description'}
            href={CASE_STUDY_URLS[locale].lightspace}
            image="/assets/images/case-studies/lightspace.png"
          />
        </div>
      </Section>

      <Section title={t('thankYou.videos.title')}>
        <div className="wrapper">
          <p className="mb-6">{t('thankYou.videos.description')}</p>
        </div>
        <div className="bleed-width-section grid gap-6 md:grid-cols-3">
          <div className="aspect-video">
            <YouTubeEmbed videoid="pbvvH0hxvdU" height={225} params="controls=1" />
          </div>
          <div className="aspect-video">
            <YouTubeEmbed videoid="4gx8teA65SY" height={225} params="controls=1" />
          </div>
          <div className="aspect-video">
            <YouTubeEmbed videoid="31Kf8czJsno" height={225} params="controls=1" />
          </div>
        </div>
      </Section>

      <Section title={t('thankYou.blogPosts.title')}>
        <div className="wrapper">
          <p className="mb-6">{t('thankYou.blogPosts.description')}</p>
          {post && <PostExcerpt post={post} />}
        </div>
      </Section>

      <Section title={t('home.testimonials.title')}>
        <div className="wrapper">
          <Testimonials itemsPerPage={1} />
        </div>
      </Section>

      <div className="text-center mt-8">
        <Link to="/">{t('thankYou.backToHome')}</Link>
      </div>
    </Page>
  )
}
