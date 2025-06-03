import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/core/components/page/page'
import { Locale } from '@/core/i18n/locale'
import { Service } from '@/features/home/delivery/service'
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle,
  Clock,
  GraduationCap,
  Laptop,
  Signpost,
  Users,
  Zap,
} from 'lucide-react'
import { Markdown } from '@/core/components/markdown/markdown'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { CaseStudyCard } from '@/features/case-studies/delivery/case-study-card'
import { CASE_STUDY_URLS } from '@/core/i18n/paths'
import { Hero } from '@/core/components/hero/hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Testimonials } from '@/core/components/testimonials/testimonials'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'

const Title: FC<{
  value: string
  icon: React.ReactNode
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
      {/* Hero Section with compelling value proposition */}
      <Hero
        image="/assets/images/me-no-bg.png"
        className="bg-gradient-to-r from-accent/20 to-background mb-16"
        imageClassName="object-contain pt-16 mx-auto max-w-xl"
      >
        <div className="wrapper text-center max-w-4xl">
          <Badge className="mb-4 text-sm px-4 py-1">Front-end Architecture Expert</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Front-end Development with Expert Architecture Solutions
          </h1>
          <p className="text-xl mb-8">
            Elevate your web applications with scalable, maintainable architecture from a specialist with over 10 years
            of experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-background">
              <Link to="/#contact" className="flex items-center">
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

      {/* Problem/Solution Section */}
      <section className="wrapper mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <AccentText>The Challenge</AccentText>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Scaling Difficulties</h3>
                  <p>
                    Front-end codebases that become unmaintainable as they grow, slowing down development and increasing
                    bugs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Technical Debt</h3>
                  <p>
                    Inconsistent patterns and practices that accumulate over time, making changes increasingly difficult
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Team Alignment</h3>
                  <p>Difficulty maintaining consistent approaches across growing development teams</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <AccentText>My Approach</AccentText>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Architectural Excellence</h3>
                  <p>Implementing proven patterns like DDD and Hexagonal Architecture that scale with your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Best Practices</h3>
                  <p>Leveraging 10+ years of experience to establish maintainable, testable code standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Knowledge Transfer</h3>
                  <p>Ensuring your team understands and can maintain the architectural principles long-term</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="bg-accent/10 py-16 mb-16">
        <div className="wrapper">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <AccentText>{t('home.services.architectureSpecialization')}</AccentText>
          </h2>
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <Markdown value={t('home.services.architectureSpecializationDescription')} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Domain-Driven Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Structuring complex business domains into maintainable, scalable code that accurately reflects your
                  business needs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Hexagonal Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Creating adaptable systems with clear boundaries between business logic and external dependencies</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Modular Front-end
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Building component-based systems that enable parallel development and easier maintenance</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Design Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Developing scalable component libraries that ensure consistency across your applications</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Performance Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Implementing best practices to ensure your applications are fast, responsive, and efficient</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  Testing Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Creating comprehensive testing approaches that catch issues early and ensure code quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="wrapper mb-16" id="services">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <AccentText>Services Offered</AccentText>
        </h2>

        <div className="bleed-width-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Service
            className="items-end bg-background shadow-lg hover:shadow-xl transition-shadow"
            center={
              <Title value={t('home.services.consultancy')} icon={<Signpost size={72} className="text-accent" />} />
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
              <Title value={t('home.services.training')} icon={<GraduationCap size={72} className="text-accent" />} />
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
            center={<Title value={t('home.services.development')} icon={<Users size={72} className="text-accent" />} />}
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

          <Service
            className="items-end bg-background shadow-lg hover:shadow-xl transition-shadow"
            center={
              <Title value={t('home.services.corporateTraining')} icon={<Laptop size={72} className="text-accent" />} />
            }
          >
            <Markdown value={t('home.services.corporateTrainingDescription')}></Markdown>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Tailored training programs for companies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Framework-specific deep dives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
                <span>Architecture and testing best practices</span>
              </li>
            </ul>
          </Service>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-accent/10 py-16 mb-16">
        <div className="wrapper">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <AccentText>My Working Process</AccentText>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Discovery</h3>
              <p>Understanding your business needs, technical challenges, and team dynamics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Strategy</h3>
              <p>Developing a tailored approach to address your specific architectural challenges</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Implementation</h3>
              <p>Executing the plan with regular check-ins and adjustments as needed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-xl mb-2">Knowledge Transfer</h3>
              <p>Ensuring your team can maintain and build upon the implemented solutions</p>
            </div>
          </div>
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
        <div className="wrapper">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <AccentText>{t('home.testimonials.title')}</AccentText>
          </h2>
          <Testimonials itemsPerPage={2} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wrapper mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <AccentText>Frequently Asked Questions</AccentText>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="bg-background border-accent/20">
            <CardHeader>
              <CardTitle>How long does a typical project take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Project timelines vary based on scope and complexity. Consultations typically range from 2-4 weeks,
                while full development projects may take 3-6 months. I&#39;ll provide a detailed timeline during our
                initial consultation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-accent/20">
            <CardHeader>
              <CardTitle>Do you work with remote teams?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Absolutely! As a digital nomad, I&#39;m experienced in working with distributed teams across different
                time zones. I use collaborative tools and regular communication to ensure smooth project delivery
                regardless of location.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-accent/20">
            <CardHeader>
              <CardTitle>What frameworks do you specialize in?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I have extensive experience with React (5+ years), Angular (4+ years), and Vue (2+ years). However, my
                architectural expertise transcends specific frameworks, focusing on patterns and practices that can be
                applied across technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-accent/20">
            <CardHeader>
              <CardTitle>How do you handle knowledge transfer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Knowledge transfer is built into my process. I provide comprehensive documentation, conduct training
                sessions, and offer post-project support to ensure your team fully understands the implemented
                architecture and can maintain it independently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-background py-16 mb-16">
        <div className="wrapper text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.services.readyToWork')}</h2>
          <p className="mb-8 max-w-2xl mx-auto">{t('home.services.readyToWorkDescription')}</p>
          <Button size="lg" variant="outline" className="bg-background text-accent hover:bg-background/90">
            <Link to="/#contact" className="flex items-center">
              {t('home.contact.title')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Page>
  )
}
