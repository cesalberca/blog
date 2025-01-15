import type { Category } from '@/app/category'
import { categories } from '@/app/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'
import { notFound } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Params = {
  params: {
    category: Category
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Index({ params }: any) {
  const { category } = params

  if (categories.indexOf(category) == -1) notFound()

  return <CategoryPage category={category} />
}

export async function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
