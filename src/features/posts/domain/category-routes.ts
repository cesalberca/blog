import { categoryKeys } from '@/features/posts/domain/categories'

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

export function generateCategoryRoutes() {
  const routes: Record<string, { es: string }> = {}

  categoryKeys.forEach((category) => {
    const spanishSlug = spanishSlugs[category]
    if (spanishSlug) {
      routes[`/blog/category/${category}`] = {
        es: `/blog/categoria/${spanishSlug}`,
      }
    }
  })

  return routes
}
