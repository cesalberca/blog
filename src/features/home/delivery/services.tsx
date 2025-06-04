import React, { type FC, type ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle, GraduationCap, Signpost, Users } from 'lucide-react'
import { Markdown } from '@/core/components/markdown/markdown'
import { Service } from '@/features/home/delivery/service'
import { AccentText } from '@/core/components/accent-text/accent-text'

const Title: FC<{
  value: string
  icon: ReactNode
}> = ({ value, icon }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold">
      <AccentText>{value}</AccentText>
    </h3>
  </div>
)

export const Services: FC = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-8">
      <div className="wrapper mx-auto">
        <Markdown className="mb-4 text-lg" value={t('home.services.description')}></Markdown>
      </div>
      <div className="bleed-width-section grid md:grid-cols-3 gap-6">
        <Service
          className="bg-background shadow-md"
          center={
            <Title value={t('home.services.consultancy')} icon={<Signpost className="text-foreground" size={72} />} />
          }
        >
          <Markdown value={t('home.services.consultancyDescription')}></Markdown>
          <ul className="mt-4 space-y-2 font-medium">
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.consultancy.features.architectureAssessment')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.consultancy.features.codeQuality')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.consultancy.features.performanceOptimization')}</span>
            </li>
          </ul>
        </Service>
        <Service
          className="bg-background shadow-md"
          center={
            <Title value={t('home.services.training')} icon={<GraduationCap className="text-foreground" size={72} />} />
          }
        >
          <Markdown value={t('home.services.trainingDescription')}></Markdown>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.training.features.workshops')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.training.features.customizedCurriculum')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.training.features.mentorship')}</span>
            </li>
          </ul>
        </Service>
        <Service
          className="bg-background shadow-md"
          center={
            <Title value={t('home.services.development')} icon={<Users className="text-foreground" size={72} />} />
          }
        >
          <Markdown value={t('home.services.developmentDescription')}></Markdown>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.development.features.fullStack')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.development.features.scalableArchitecture')}</span>
            </li>
            <li className="flex items-start gap-2 text-base">
              <CheckCircle className="text-accent shrink-0 mt-1" size={16} />
              <span>{t('services.servicesOffered.development.features.testing')}</span>
            </li>
          </ul>
        </Service>
      </div>
    </div>
  )
}
