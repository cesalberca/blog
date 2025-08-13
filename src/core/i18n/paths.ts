import { Locale } from '@/core/i18n/locale'

export const CASE_STUDY_URLS = {
  [Locale.EN]: {
    tabaiba: '/case-studies/tabaiba-mobile-app-ddd-architecture',
    halioooo: '/case-studies/halioooo-design-system-architecture-library',
    lightspace: '/case-studies/lightspace-shopify-best-practices',
  },
  [Locale.ES]: {
    tabaiba: '/casos-de-estudio/tabaiba-app-movil-arquitectura-ddd',
    halioooo: '/casos-de-estudio/halioooo-sistema-de-diseno-biblioteca-de-arquitectura',
    lightspace: '/casos-de-estudio/lightspace-shopify-buenas-practicas',
  },
} as const
