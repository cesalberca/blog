import type { Category } from '@/app/category'
import { categories } from '@/app/categories'
import { CategoryPage } from '@/features/posts/delivery/category.page'

export default async function Index({ params }: { params: { category: Category } }) {
  return <CategoryPage category={params.category} />
}

export function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}
