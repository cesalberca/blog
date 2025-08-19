import type { NextPage } from 'next'
import { HomePage } from '@/features/home/delivery/home.page'
import { getPosts } from '@/posts'
import { Locale } from '@/core/i18n/locale'

const Page: NextPage<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
  const { locale } = await params
  const allPosts = await getPosts({ locale })

  const latestPost = allPosts.at(0) ?? null

  return <HomePage latestPost={latestPost} />
}
export default Page
