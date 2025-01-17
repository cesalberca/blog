import { BlogPostsPage } from '@/features/posts/delivery/posts.page'
import { setRequestLocale } from 'next-intl/server'
import { NextPage } from 'next'
import { Locale } from '@/core/i18n/locale'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

const Page: NextPage<{
  params: Promise<{
    locale: Locale
  }>
}> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <BlogPostsPage locale={locale} />
}
export default Page
