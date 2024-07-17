import { getRequestConfig } from 'next-intl/server'
import { Locale } from './locale'

export default getRequestConfig(async () => {
  const locale = Locale.EN

  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  }
})
