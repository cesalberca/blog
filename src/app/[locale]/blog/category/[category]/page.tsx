import { categories } from '@/features/posts/domain/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/core/i18n/locale'
import type { NextPage } from 'next'
import { spanishSlugs } from '@/features/posts/domain/category-routes'
import type { Category } from '@/features/posts/domain/category'

const Page: NextPage<{
  params: Promise<{
    category: Category
    locale: string
  }>
}> = async ({ params }) => {
  const { category, locale } = await params
  setRequestLocale(locale)

  if (!category) notFound()

  return <CategoryPage locale={locale as Locale} category={category} />
}
export default Page

export async function generateStaticParams() {
  const englishParams = categories.map(category => ({
    category,
    locale: Locale.EN,
  }))

  const spanishParams = categories.map(category => {
    const spanishSlug = spanishSlugs[category]
    return {
      category: spanishSlug ?? category,
      locale: Locale.ES,
    }
  })

  return [...englishParams, ...spanishParams]
}
