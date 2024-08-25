import type { Category } from '@/app/category'

export interface PostMetadata {
  slug: string
  title: string
  date: string
  readTime: number
  image: string
  summary: string
  categories: Category[]
}
