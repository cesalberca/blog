import type { FC } from 'react'
import { Page } from '@/core/components/page/page'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'
import { useTranslations } from 'next-intl'
import type { CaseStudy } from '@/features/case-studies/domain/case-study'

export const CaseStudiesPage: FC = () => {
  const t = useTranslations()

  const caseStudies: CaseStudy[] = [
    {
      slug: 'tabaiba',
      titleKey: 'caseStudies.tabaiba.title',
      descriptionKey: 'caseStudies.tabaiba.description',
    },
    // More case studies will be added here
  ]

  return (
    <Page>
      <section className="wrapper my-l">
        <h1 className="text-4xl font-bold mb-8">{t('caseStudies.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(study => (
            <Link key={study.slug} to={`/case-studies/${study.slug}`} type="invisible">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{t(study.titleKey)}</CardTitle>
                  <CardDescription>{t(study.descriptionKey)}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  )
}
