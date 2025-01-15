import { Locale } from '@/core/i18n/locale'

export const locales = [Locale.EN, Locale.ES] as const
export type Locales = (typeof locales)[number]
