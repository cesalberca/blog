import { getRequestConfig } from 'next-intl/server'
import { Locale } from './locale'
import { AccentText } from '@/core/components/accent-text/accent-text'

export default getRequestConfig(async () => {
  const locale = Locale.EN

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
