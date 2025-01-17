import type { Category } from '@/features/posts/domain/category'
import { categories } from '@/features/posts/domain/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/core/i18n/locale'
import { NextPage } from 'next'

const Page: NextPage<{
  params: Promise<{
    category: Category
    locale: string
  }>
}> = async ({ params }) => {
  const { category, locale } = await params
  setRequestLocale(locale)

  if (categories.indexOf(category) == -1) notFound()

  return <CategoryPage locale={locale as Locale} category={category} />
}
export default Page

export async function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
