import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { hasLocale } from 'next-intl'
import { Locale } from '@/core/i18n/locale'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (
      await (locale === Locale.EN ? import(`./translations/en.json`) : import(`./translations/${locale}.json`))
    ).default,
  }
})
