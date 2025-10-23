import { type FC } from 'react'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Locale } from '@/core/i18n/locale'
import { getLocale, getTranslations } from 'next-intl/server'

export const CaseStudies: FC = async () => {
  const t = await getTranslations()
  const locale = (await getLocale()) as Locale
  return (
    <div className="flex flex-col gap-4">
      <div className="wrapper">
        <p className="mb-4">{t('caseStudies.description')}</p>
      </div>
      <div className="bleed-width-section grid md:grid-cols-3 gap-2">
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
    </div>
  )
}
