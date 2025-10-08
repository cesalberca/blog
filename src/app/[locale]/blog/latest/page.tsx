import { redirect } from 'next/navigation'
import { getPosts } from '@/posts'
import type { Locale } from '@/core/i18n/locale'

interface LatestPostPageProps {
  params: Promise<{
    locale: Locale
  }>
}

const LatestPostPage = async ({ params }: LatestPostPageProps) => {
  const { locale } = await params

  const posts = await getPosts({ locale })

  const latestPost = posts[0]

  if (latestPost === undefined) {
    redirect(`/${locale}/blog`)
  }

  redirect(`/${locale}/blog/${latestPost.slug}`)
}

export default LatestPostPage
