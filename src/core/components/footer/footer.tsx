import type { FC } from 'react'
import { SocialMedia } from '@/core/components/social-media/social-media'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/core/components/link/link'
import { Datetime } from '@/core/date/datetime'
import { NewsletterCard } from '@/core/components/newsletter-card/newsletter-card'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Locale } from '@/core/i18n/locale'
import { RichText } from '@/core/components/rich-text/rich-text'

export const Footer: FC = () => {
  const t = useTranslations()
  const locale = useLocale() as Locale

  return (
    <footer className="mt-12 py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/assets/logo.svg" width={32} height={32} alt={t('common.logo')} className="h-6 w-6" />
              <span className="text-lg font-semibold">{t('home.title')}</span>
            </div>
            <RichText className="text-sm text-muted-foreground">{tags => t.rich('home.heroCaption', tags)}</RichText>
            <div className="flex items-center space-x-4 mt-4">
              <SocialMedia />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">{t('common.sitemap')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" type="invisible" className="text-sm hover:underline">
                  {t('home.title')}
                </Link>
              </li>
              <li>
                <Link to="/blog" type="invisible" className="text-sm hover:underline">
                  {t('blog.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" type="invisible" className="text-sm hover:underline">
                  {t('home.services.title')}
                </Link>
              </li>
              <li>
                <Link to="/#contact" type="invisible" className="text-sm hover:underline">
                  {t('home.contact.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">{t('common.more')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/talks" type="invisible" className="text-sm hover:underline">
                  {t('talks.title')}
                </Link>
              </li>
              <li>
                <Link to="/experience" type="invisible" className="text-sm hover:underline">
                  {t('experience.title')}
                </Link>
              </li>
              <li>
                <Link to="/photography" type="invisible" className="text-sm hover:underline">
                  {t('photography.title')}
                </Link>
              </li>
              <li>
                <Link to="/links" type="invisible" className="text-sm hover:underline">
                  {t('links.title')}
                </Link>
              </li>
              <li>
                <Link to={CASE_STUDY_URLS[locale].tabaiba} type="invisible" className="text-sm hover:underline">
                  {t('caseStudies.tabaiba.title')}
                </Link>
              </li>
              <li>
                <Link to={CASE_STUDY_URLS[locale].halioooo} type="invisible" className="text-sm hover:underline">
                  {t('caseStudies.halioooo.title')}
                </Link>
              </li>
              <li>
                <Link to={CASE_STUDY_URLS[locale].lightspace} type="invisible" className="text-sm hover:underline">
                  {t('caseStudies.lightspace.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2">
            <NewsletterCard defaultExpanded={false} />
          </div>
        </div>

        {/* Bottom section with copyright and email */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{t('common.license', { date: Datetime.fromNow().year })}</p>
          <Link to="mailto:cesar@cesalberca.com" type="invisible" className="text-sm mt-4 md:mt-0">
            {t('common.email')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
