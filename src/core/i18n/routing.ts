import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locale } from '@/core/i18n/locale'
import { locales } from '@/core/i18n/locales'

export const routing = defineRouting({
  locales,
  defaultLocale: Locale.EN,
  pathnames: {
    '/case-studies/tabaiba-mobile-app-ddd-architecture': {
      es: '/casos-de-estudio/tabaiba-app-movil-arquitectura-ddd',
    },
    '/case-studies/halioooo-design-system-architecture-library': {
      es: '/casos-de-estudio/halioooo-sistema-de-diseno-biblioteca-de-arquitectura',
    },
    '/blog/bullet-journal-method': {
      es: '/blog/metodo-bullet-journal',
    },
    '/blog/2024-a-review-of-a-transformative-year': {
      es: '/blog/2024-reflexiones-de-un-proceso-transformador',
    },
    '/services': {
      es: '/servicios',
    },
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
