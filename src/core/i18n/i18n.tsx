import { getRequestConfig } from 'next-intl/server'
import { Locale } from './locale'
import { ScrambleText } from '@/core/components/scramble-text/scramble-text'

export default getRequestConfig(async () => {
  const locale = Locale.EN

  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
    defaultTranslationValues: {
      strong: chunks => <strong>{chunks}</strong>,
      leet: chunks => <ScrambleText>{chunks}</ScrambleText>,
    },
  }
})
