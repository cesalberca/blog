import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locale } from '@/core/i18n/locale'
import { locales } from '@/core/i18n/locales'

export const routing = defineRouting({
  locales,
  defaultLocale: Locale.EN,
  localePrefix: 'as-needed',
  pathnames: {
    '/case-studies/tabaiba-en': {
      [Locale.EN]: '/case-studies/tabaiba-en',
      [Locale.ES]: '/case-studies/tabaiba-es',
    },
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
