import { Link } from '@/core/components/link/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Page } from '@/core/components/page/page'
import { YouTubeEmbed } from '@next/third-parties/google'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Locale } from '@/core/i18n/locale'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale })

  return {
    title: t('home.contact.thankYou.title'),
    description: t('home.contact.thankYou.description'),
  }
}

export default async function ThankYouPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale })
  const locale = params.locale as Locale

  // Mock blog post for the PostExcerpt component
  const mockPost = {
    title: t('home.contact.thankYou.blogPosts.aiArchitecture'),
    slug: 'ai-ready-frontend-architecture',
    date: '2025-08-10',
    readTime: 5,
    image: 'blog-redesign.webp', // Using an existing image
    summary: t('home.contact.thankYou.blogPosts.description'),
    categories: ['software-architecture', 'ai'],
  }

  return (
    <Page>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t('home.contact.thankYou.title')}</h1>
            <p className="text-xl">{t('home.contact.thankYou.description')}</p>
          </div>

          <section>
            <h2 className="text-3xl font-semibold mb-6">{t('home.contact.thankYou.caseStudies.title')}</h2>
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
            <h2 className="text-3xl font-semibold mb-6">{t('home.contact.thankYou.videos.title')}</h2>
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
            <h2 className="text-3xl font-semibold mb-6">{t('home.contact.thankYou.blogPosts.title')}</h2>
            <p className="mb-6">{t('home.contact.thankYou.blogPosts.description')}</p>
            <PostExcerpt post={mockPost} />
          </section>

          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
            >
              {t('home.contact.thankYou.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}
