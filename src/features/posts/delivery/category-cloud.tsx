'use client'

import type { FC } from 'react'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Locale } from '@/core/i18n/locale'
import { categoryKeys } from '@/features/posts/domain/categories'
import { spanishSlugs } from '@/features/posts/domain/category-routes'

export const CategoryCloud: FC = () => {
  const t = useTranslations('blog.categories')
  const locale = useLocale() as Locale

  return (
    <div className="wrapper mb-6 flex flex-wrap gap-2 justify-center">
      {categoryKeys.map((category) => (
        <Link
          key={category}
          type="invisible"
          href={
            locale === Locale.ES
              ? `/blog/categoria/${spanishSlugs[category] || category}`
              : `/blog/category/${category}`
          }
          className={cn(badgeVariants({ variant: 'outline' }), 'p-0 h-min')}
        >
          <Badge>{t(category)}</Badge>
        </Link>
      ))}
    </div>
  )
}
