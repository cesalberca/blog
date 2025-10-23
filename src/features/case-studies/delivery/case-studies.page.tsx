import { Page } from '@/core/components/page/page'
import { Section } from '@/core/components/section/section'
import { getTranslations } from 'next-intl/server'
import type { FC } from 'react'
import { CaseStudies } from '@/features/case-studies/delivery/case-studies'

export const CaseStudiesPage: FC = async () => {
  const t = await getTranslations()

  return (
    <Page>
      <Section title={t('caseStudies.title')}>
        <CaseStudies />
      </Section>
    </Page>
  )
}
