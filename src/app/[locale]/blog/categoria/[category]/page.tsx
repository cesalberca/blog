import { redirect } from 'next/navigation'
import { NextPage } from 'next'
import { Locale } from '@/core/i18n/locale'
import { spanishToEnglish, spanishSlugs } from '@/features/posts/domain/category-routes'
import { categories } from '@/features/posts/domain/categories'

const Page: NextPage<{
  params: Promise<{
    category: string
    locale: string
  }>
}> = async ({ params }) => {
  const { category: spanishSlug, locale } = await params

  // This page should only be accessed with Spanish locale
  if (locale !== Locale.ES) {
    redirect(`/blog/category/${spanishSlug}`)
  }

  // Map the Spanish slug to an English category key
  const englishKey = spanishToEnglish[spanishSlug]

  if (!englishKey) {
    redirect('/blog')
  }

  // Redirect to the English category page with the English key
  redirect(`/blog/category/${englishKey}`)
}

export default Page

export async function generateStaticParams() {
  // Generate params for Spanish categories only
  return categories
    .map(category => {
      const spanishSlug = spanishSlugs[category]
      return {
        category: spanishSlug || category,
        locale: Locale.ES,
      }
    })
    .filter(params => params.category) // Filter out any undefined slugs
}
