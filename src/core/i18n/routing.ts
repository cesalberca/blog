import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locale } from '@/core/i18n/locale'
import { locales } from '@/core/i18n/locales'
import { generateCategoryRoutes } from '@/features/posts/domain/category-routes'

const categoryRoutes = generateCategoryRoutes()

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
    '/case-studies/lightspace-shopify-best-practices': {
      es: '/casos-de-estudio/lightspace-shopify-buenas-practicas',
    },
    '/blog/bullet-journal-method': {
      es: '/blog/metodo-bullet-journal',
    },
    '/blog/2024-a-review-of-a-transformative-year': {
      es: '/blog/2024-reflexiones-de-un-proceso-transformador',
    },
    '/blog/ai-shortcuts-chatgpt': {
      es: '/blog/ia-atajos-chatgpt',
    },
    '/services': {
      es: '/servicios',
    },
    ...categoryRoutes,
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
