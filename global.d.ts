import { formats } from './src/core/i18n/i18n'
import en from './src/core/i18n/translations/en.json'
import { routing } from '/src/core/i18n/routing'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
    Locale: (typeof routing.locales)[number]
  }
}
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}
