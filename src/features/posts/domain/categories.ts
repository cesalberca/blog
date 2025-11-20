import type { Locale } from '@/core/i18n/locale'
import { getTranslations } from 'next-intl/server'

export const categoryKeys = [
  'ai',
  'angular',
  'react',
  'testing',
  'branding',
  'design',
  'software-development',
  'javascript',
  'typescript',
  'software-architecture',
  'design-patterns',
  'css',
  'newsletter',
  'personal-development',
  'productivity',
  'yearly-review',
  'writing',
] as const

export const categories = categoryKeys

export async function getTranslatedCategories(locale: Locale) {
  const t = await getTranslations({ locale, namespace: 'blog.categories' })
  return categoryKeys.map(category => ({
    key: category,
    translation: t(category),
  }))
}
