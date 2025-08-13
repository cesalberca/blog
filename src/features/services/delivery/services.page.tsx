import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { Locale } from '@/core/i18n/locale'
import { ArrowRight, Award, BarChart, Clock, GraduationCap, Users, Zap } from 'lucide-react'
import { Markdown } from '@/core/components/markdown/markdown'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Hero } from '@/core/components/hero/hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Testimonials } from '@/core/components/testimonials/testimonials'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'
import { OpenToWork } from '@/core/components/open-to-work/open-to-work'
import { Services } from '@/features/home/delivery/services'

export const ServicesPage: FC<{ locale: Locale }> = async ({ locale }) => {
  const t = await getTranslations()

  return (
    <Page>
      <OpenToWork />
      <Hero
        image="/assets/images/me-no-bg.png"
        className="bg-gradient-to-r from-accent/20 to-background mb-16"
        imageClassName="object-contain pt-16 mx-auto max-w-xl"
      >
        <div className="wrapper text-center max-w-4xl">
          <Badge className="mb-4 text-sm px-4 py-1">{t('services.hero.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <AccentText>{t('services.hero.title')}</AccentText>
          </h1>
          <p className="text-xl mb-8">{t('services.hero.subtitle')}</p>
        </div>
      </Hero>

      <section className="container mb-16" id="services">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <AccentText>{t('services.servicesOffered.title')}</AccentText>
        </h2>

        <Services />
      </section>

      <section className="container mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-10">
              <AccentText>{t('services.challenge.title')}</AccentText>
            </h2>
            <div className="flex-col space-y-10">
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <BarChart className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.challenge.scalingDifficulties.title')}</h3>
                  <p>{t('services.challenge.scalingDifficulties.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Clock className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.challenge.technicalDebt.title')}</h3>
                  <p>{t('services.challenge.technicalDebt.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Users className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.challenge.teamAlignment.title')}</h3>
                  <p>{t('services.challenge.teamAlignment.description')}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-10">
              <AccentText>{t('services.approach.title')}</AccentText>
            </h2>
            <div className="flex-col space-y-10">
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Zap className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.approach.architecturalExcellence.title')}</h3>
                  <p>{t('services.approach.architecturalExcellence.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Award className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.approach.bestPractices.title')}</h3>
                  <p>{t('services.approach.bestPractices.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <GraduationCap className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{t('services.approach.knowledgeTransfer.title')}</h3>
                  <p>{t('services.approach.knowledgeTransfer.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/10 py-16 mb-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <AccentText>{t('home.services.architectureSpecialization')}</AccentText>
          </h2>
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <Markdown value={t('home.services.architectureSpecializationDescription')} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.domainDrivenDesign.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.domainDrivenDesign.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.hexagonalArchitecture.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.hexagonalArchitecture.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.modularFrontend.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.modularFrontend.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.designSystems.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.designSystems.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.performanceOptimization.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.performanceOptimization.description')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('services.architectureSpecialization.testingStrategies.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('services.architectureSpecialization.testingStrategies.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="wrapper mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <AccentText>{t('caseStudies.title')}</AccentText>
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">{t('home.services.caseStudiesIntro')}</p>

        <div className="bleed-width-section grid md:grid-cols-3 gap-8">
          <CaseStudyCard
            title={t('caseStudies.tabaiba.title')}
            description={t('caseStudies.tabaiba.description')}
            href={CASE_STUDY_URLS[locale].tabaiba}
            image="/assets/images/case-studies/tabaiba.jpg"
          />
          <CaseStudyCard
            title={t('caseStudies.halioooo.title')}
            description={t('caseStudies.halioooo.description')}
            href={CASE_STUDY_URLS[locale].halioooo}
            image="/assets/images/case-studies/halioooo.png"
          />
          <CaseStudyCard
            title={t('caseStudies.lightspace.title')}
            description={t('caseStudies.lightspace.description')}
            href={CASE_STUDY_URLS[locale].lightspace}
            image="/assets/images/case-studies/lightspace.png"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-accent/10 py-16 mb-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <AccentText>{t('home.testimonials.title')}</AccentText>
          </h2>
          <Testimonials itemsPerPage={1} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wrapper mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <AccentText>{t('services.faq.title')}</AccentText>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">{t('services.faq.cost.question')}</AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.cost.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                {t('services.faq.remoteWork.question')}
              </AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.remoteWork.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                {t('services.faq.frameworks.question')}
              </AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.frameworks.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                {t('services.faq.knowledgeTransfer.question')}
              </AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.knowledgeTransfer.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">{t('services.faq.approach.question')}</AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.approach.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                {t('services.faq.existingCodebase.question')}
              </AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.existingCodebase.answer')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                {t('services.faq.ongoingSupport.question')}
              </AccordionTrigger>
              <AccordionContent>
                <p>{t('services.faq.ongoingSupport.answer')}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 mb-16 bg-accent/10">
        <div className="wrapper text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.services.readyToWork')}</h2>
          <p className="mb-8 max-w-2xl mx-auto">{t('home.services.readyToWorkDescription')}</p>
          <Button size="lg" variant="outline" className="bg-background hover:bg-background/90">
            <Link to="/#contact" type="invisible" className="flex items-center">
              {t('home.contact.title')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Page>
  )
}
