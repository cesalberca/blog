import type { categoryKeys } from '@/features/posts/domain/categories'

export type Category = (typeof categoryKeys)[number]
