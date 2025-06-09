import type { Category } from '@/features/posts/domain/category'

export interface PostMetadata {
  title: string
  slug: string
  date: string
  readTime: number
  image: string
  summary: string
  categories: Category[]
}
