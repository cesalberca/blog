import { Link } from '@/core/components/link/link'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { YouTubeEmbed } from '@next/third-parties/google'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { FC } from 'react'
import { PostMetadata } from '@/features/posts/domain/post-metadata'
import { Locale } from '@/core/i18n/locale'

export const ThankYouPage: FC<{ post: PostMetadata; locale: Locale }> = async ({ post, locale }) => {
  const t = await getTranslations()

  return (
    <Page>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1>
              <AccentText>{t('home.contact.thankYou.title')}</AccentText>
            </h1>
            <p>{t('home.contact.thankYou.description')}</p>
          </div>

          <section>
            <h2 className="mb-6">{t('home.contact.thankYou.caseStudies.title')}</h2>
            <p className="mb-6">{t('home.contact.thankYou.caseStudies.description')}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <CaseStudyCard
                title={t('caseStudies.tabaiba.title')}
                description={t('caseStudies.tabaiba.description')}
                href={CASE_STUDY_URLS[locale].tabaiba}
                image="/assets/images/case-studies/tabaiba.jpg"
              />
              <CaseStudyCard
                title={t('caseStudies.useCases.title')}
                description={t('caseStudies.useCases.description')}
                href={CASE_STUDY_URLS[locale].halioooo}
                image="/assets/images/case-studies/halioooo.png"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-6">{t('home.contact.thankYou.videos.title')}</h2>
            <p className="mb-6">{t('home.contact.thankYou.videos.description')}</p>
            <div className="grid gap-6 md:grid-cols-3">
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
          </section>

          <section>
            <h2 className="mb-6">{t('home.contact.thankYou.blogPosts.title')}</h2>
            <p className="mb-6">{t('home.contact.thankYou.blogPosts.description')}</p>
            {post && <PostExcerpt post={post} />}
          </section>

          <div className="text-center mt-8">
            <Link to="/public">{t('home.contact.thankYou.backToHome')}</Link>
          </div>
        </div>
      </div>
    </Page>
  )
}
