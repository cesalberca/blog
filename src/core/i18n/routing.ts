import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locale } from '@/core/i18n/locale'
import { locales } from '@/core/i18n/locales'

export const routing = defineRouting({
  locales,
  defaultLocale: Locale.EN,
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/2024-review': {
      en: '/pathnames',
      es: '/pfadnamen',
    },
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
