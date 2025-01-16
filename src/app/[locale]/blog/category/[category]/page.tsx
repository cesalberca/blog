import type { Category } from '@/features/posts/domain/category'
import { categories } from '@/features/posts/domain/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

type Params = {
  params: {
    category: Category
    locale: string
  }
}

export default function Index({ params }: Params) {
  const { category, locale } = params
  setRequestLocale(locale)

  if (categories.indexOf(category) == -1) notFound()

  return <CategoryPage category={category} />
}

export async function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
