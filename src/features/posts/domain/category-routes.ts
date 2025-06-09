import { categoryKeys } from '@/features/posts/domain/categories'
import { Locale } from '@/core/i18n/locale'
import type { Category } from '@/features/posts/domain/category'

export const spanishSlugs: Record<string, string> = {
  angular: 'angular',
  react: 'react',
  testing: 'pruebas',
  branding: 'branding',
  design: 'diseno',
  'software-development': 'desarrollo-de-software',
  javascript: 'javascript',
  typescript: 'typescript',
  'software-architecture': 'arquitectura-de-software',
  'design-patterns': 'patrones-de-diseno',
  css: 'css',
  'personal-development': 'desarrollo-personal',
  productivity: 'productividad',
  'yearly-review': 'revision-anual',
  writing: 'escritura',
}

// Reverse mapping: Spanish URL slugs to English category keys
export const spanishToEnglish: Record<string, string> = Object.entries(spanishSlugs).reduce(
  (acc, [englishKey, spanishSlug]) => {
    acc[spanishSlug] = englishKey
    return acc
  },
  {} as Record<string, string>,
)

// This function generates URL mappings for all categories
export function generateCategoryRoutes() {
  const routes: Record<string, { es: string }> = {}

  // Generate routes for each category
  categoryKeys.forEach(category => {
    const spanishSlug = spanishSlugs[category]
    if (spanishSlug) {
      routes[`/blog/category/${category}`] = {
        es: `/blog/categoria/${spanishSlug}`,
      }
    }
  })

  return routes
}

// This function maps a URL slug to a category key based on the locale
export function mapSlugToCategory(slug: string, locale: Locale): Category | null {
  if (locale === Locale.EN) {
    // For English, the slug is the same as the category key
    const isValid = categoryKeys.includes(slug as any)
    return isValid ? (slug as Category) : null
  } else {
    // For Spanish, we need to map the slug back to the English category key
    const englishKey = spanishToEnglish[slug]

    const isValid = englishKey && categoryKeys.includes(englishKey as any)

    return isValid ? (englishKey as Category) : null
  }
}
