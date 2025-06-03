import type { FC, ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { Locale } from '@/core/i18n/locale'
import { Service } from '@/features/home/delivery/service'
import { ArrowRight, Award, BarChart, CheckCircle, Clock, GraduationCap, Signpost, Users, Zap } from 'lucide-react'
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

const Title: FC<{
  value: string
  icon: ReactNode
}> = ({ value, icon }) => (
  <div className="flex flex-col items-center justify-center">
    {icon}
    <h3>{value}</h3>
  </div>
)

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
          <Badge className="mb-4 text-sm px-4 py-1">Front-end Architecture Expert</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <AccentText>Transform Your Front-end Development with Expert Architecture Solutions</AccentText>
          </h1>
          <p className="text-xl mb-8">
            Elevate your web applications with scalable, maintainable architecture from a specialist with over 10 years
            of experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              <Link type="invisible" to="/#contact" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#services" className="flex items-center">
                Explore Services
              </a>
            </Button>
          </div>
        </div>
      </Hero>

      <section className="container mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-10">
              <AccentText>The Challenge</AccentText>
            </h2>
            <div className="flex-col space-y-10">
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <BarChart className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Scaling Difficulties</h3>
                  <p>Codebases that become unmaintainable as they grow, slowing down development</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Clock className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Technical Debt</h3>
                  <p>Inconsistent patterns and practices that accumulate over time, hindering future changes</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Users className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Team Alignment</h3>
                  <p>Difficulty maintaining consistent approaches and standards across growing development teams</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-10">
              <AccentText>My Approach</AccentText>
            </h2>
            <div className="flex-col space-y-10">
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Zap className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Architectural Excellence</h3>
                  <p>Implementing proven architectural patterns that scale effectively with your business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <Award className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Best Practices</h3>
                  <p>Leveraging years of experience to establish maintainable and testable code standards</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 text-accent">
                  <GraduationCap className="text-foreground" size={48} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Knowledge Transfer</h3>
                  <p>Ensuring your team understands and can maintain the architectural principles effectively</p>
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
                <CardTitle className="flex items-center gap-2">Domain-Driven Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Structuring complex business domains into maintainable code that accurately reflects your business
                  needs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Hexagonal Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Creating adaptable systems with clear boundaries between core business logic and external dependencies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Modular Front-end</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Building component-based systems that enable parallel development, better code reuse, and easier
                  maintenance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Design Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Developing scalable component libraries that ensure visual and functional consistency across your
                  applications
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Implementing proven best practices to ensure your applications are fast, responsive, and
                  resource-efficient
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Testing Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Creating comprehensive testing approaches that catch issues early, prevent regressions, and ensure
                  code quality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mb-16" id="services">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <AccentText>Services Offered</AccentText>
        </h2>

        <div className="bleed-width-section grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          <Service
            className="items-end bg-background shadow-lg hover:shadow-xl transition-shadow"
            center={
              <Title value={t('home.services.consultancy')} icon={<Signpost size={72} className="text-foreground" />} />
            }
          >
            <Markdown value={t('home.services.consultancyDescription')}></Markdown>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Architecture assessment and recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Code quality and best practices review</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Performance optimization strategies</span>
              </li>
            </ul>
          </Service>

          <Service
            className="items-end bg-background shadow-lg hover:shadow-xl transition-shadow"
            center={
              <Title
                value={t('home.services.training')}
                icon={<GraduationCap size={72} className="text-foreground" />}
              />
            }
          >
            <Markdown value={t('home.services.trainingDescription')}></Markdown>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Hands-on workshops for your team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Customized curriculum based on needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Ongoing mentorship options</span>
              </li>
            </ul>
          </Service>

          <Service
            className="items-end bg-background shadow-lg hover:shadow-xl transition-shadow"
            center={
              <Title value={t('home.services.development')} icon={<Users size={72} className="text-foreground" />} />
            }
          >
            <Markdown value={t('home.services.developmentDescription')}></Markdown>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Full-stack development with modern frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Scalable architecture implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Comprehensive testing and documentation</span>
              </li>
            </ul>
          </Service>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="wrapper mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <AccentText>{t('caseStudies.title')}</AccentText>
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">{t('home.services.caseStudiesIntro')}</p>

        <div className="bleed-width-section grid md:grid-cols-2 gap-8">
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
          <AccentText>Frequently Asked Questions</AccentText>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">How much does it cost?</AccordionTrigger>
              <AccordionContent>
                <p>How much money are you willing to lose by not implementing best practices?</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">Do you work with remote teams?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Absolutely! As a digital nomad, I&#39;m experienced in working with distributed teams across different
                  time zones. I use collaborative tools and regular communication to ensure smooth project delivery
                  regardless of location.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">What frameworks do you specialize in?</AccordionTrigger>
              <AccordionContent>
                <p>
                  I have extensive experience with React (5+ years), Angular (4+ years), and Vue (2+ years). However, my
                  architectural expertise transcends specific frameworks, focusing on patterns and practices that can be
                  applied across technologies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">How do you handle knowledge transfer?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Knowledge transfer is built into my process. I provide comprehensive documentation, conduct training
                  sessions, and offer post-project support to ensure your team fully understands the implemented
                  architecture and can maintain it independently.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                What makes your architectural approach different?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  My approach combines Domain-Driven Design with Hexagonal Architecture to create systems that are both
                  business-aligned and technically robust. I focus on creating clear boundaries between your core domain
                  and external dependencies, making your codebase more maintainable and adaptable to change.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                Can you help with an existing codebase?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Absolutely. I specialize in refactoring and improving existing codebases. I&#39;ll analyze your
                  current architecture, identify pain points, and create a strategic plan to incrementally improve your
                  system without disrupting ongoing development. This approach allows you to gradually adopt better
                  practices while continuing to deliver business value.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-accent/20 rounded-md mb-4 px-4">
              <AccordionTrigger className="text-lg font-medium">
                Do you offer ongoing support after project completion?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, I offer flexible support options after the initial engagement. This can include code reviews,
                  architecture guidance for new features, or regular check-ins to ensure your team is following the
                  established patterns. My goal is to ensure long-term success, not just deliver a solution and walk
                  away.
                </p>
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
