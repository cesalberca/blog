import type { categories } from '@/features/posts/domain/categories'

export type Category = (typeof categories)[number]
