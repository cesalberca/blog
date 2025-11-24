import type { Category } from '@/features/posts/domain/category'
import { categories, getTranslatedCategories } from '@/features/posts/domain/categories'
import { getPostsByCategory } from '@/posts'
import { Page } from '@/core/components/page/page'
import { PostExcerpt } from '@/features/posts/delivery/post-excerpt'
import type { FC } from 'react'
import { Masonry } from '@/core/components/masonry/masonry'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { Link } from '@/core/components/link/link'
import type { Locale } from '@/core/i18n/locale'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

export const CategoryPage: FC<{ category: Category; locale: Locale }> = async ({ category, locale }) => {
  if (categories.indexOf(category) === -1) {
    notFound()
  }

  const translatedCategories = await getTranslatedCategories(locale)
  const translatedCategory = translatedCategories.find((c) => c.key === category)?.translation ?? category
  const t = await getTranslations('blog')

  const posts = await getPostsByCategory({ category, locale })

  return (
    <Page>
      <div className="wrapper mb-4 gap-2 flex items-center">
        <Button variant="ghost" size="sm" className="mr-2" asChild>
          <Link href="/blog" type="invisible">
            <ChevronLeft className="mr-1" size={16} />
            {t('backToList')}
          </Link>
        </Button>
        <Badge>{translatedCategory}</Badge>
      </div>
      {posts.length > 0 ? (
        <Masonry>
          {posts.map((x) => (
            <PostExcerpt key={x.slug} post={x} />
          ))}
        </Masonry>
      ) : (
        <div className="wrapper text-center py-10">
          <p className="text-lg text-muted-foreground">{t('noPosts')}</p>
        </div>
      )}
    </Page>
  )
}
