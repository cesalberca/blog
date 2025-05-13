import { Locale } from '@/core/i18n/locale'

export const CASE_STUDY_URLS = {
  [Locale.EN]: {
    tabaiba: '/case-studies/tabaiba-mobile-app-ddd-architecture',
    useCases: '/case-studies/case-studies-use-cases',
  },
  [Locale.ES]: {
    tabaiba: '/casos-de-estudio/tabaiba-app-movil-arquitectura-ddd',
    useCases: '/casos-de-estudio/casos-de-estudio-casos-de-uso',
  },
} as const
