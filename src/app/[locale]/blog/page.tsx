import { BlogPostsPage } from '@/features/posts/delivery/posts.page'
import { setRequestLocale } from 'next-intl/server'
import { NextPage } from 'next'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

const Page: NextPage<{ params: { locale: string } }> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <BlogPostsPage />
}
export default Page
