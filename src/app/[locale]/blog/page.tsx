import { BlogPostsPage } from '@/features/posts/delivery/posts.page'
import { NextPage } from 'next'
import { Locale } from '@/core/i18n/locale'

const Page: NextPage<{
  params: Promise<{
    locale: Locale
  }>
}> = async ({ params }) => {
  const { locale } = await params
  return <BlogPostsPage locale={locale} />
}
export default Page
