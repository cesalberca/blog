import type { Category } from '@/features/posts/domain/category'
import { categories } from '@/features/posts/domain/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/core/i18n/locale'
import { NextPage } from 'next'
import { mapSlugToCategory, spanishSlugs } from '@/features/posts/domain/category-routes'

const Page: NextPage<{
  params: Promise<{
    category: string
    locale: string
  }>
}> = async ({ params }) => {
  const { category: categorySlug, locale } = await params
  setRequestLocale(locale)

  // Map the URL slug to a category key based on the locale
  const category = mapSlugToCategory(categorySlug, locale as Locale)

  if (!category) notFound()

  return <CategoryPage locale={locale as Locale} category={category} />
}
export default Page

export async function generateStaticParams() {
  // Generate params for English categories
  const englishParams = categories.map(category => ({
    category,
    locale: Locale.EN,
  }))

  // Generate params for Spanish categories
  const spanishParams = categories.map(category => {
    const spanishSlug = spanishSlugs[category]
    return {
      category: spanishSlug || category,
      locale: Locale.ES,
    }
  })

  return [...englishParams, ...spanishParams]
}
