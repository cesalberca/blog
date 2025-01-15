import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Locales } from '@/core/i18n/locales'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locales)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
    defaultTranslationValues: {
      strong: chunks => <strong>{chunks}</strong>,
      em: chunks => <em>{chunks}</em>,
      leet: chunks => <AccentText>{chunks}</AccentText>,
    },
  }
})
