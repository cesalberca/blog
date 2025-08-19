import type { NextPage } from 'next'
import { Locale } from '@/core/i18n/locale'
import { getPost } from '@/posts'
import { ThankYouPage } from '@/features/home/delivery/thank-you.page'

const Index: NextPage<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
  const { locale } = await params

  const post = await getPost({
    slug: 'ai-ready-frontend-architecture',
    locale,
  })

  if (post === null) {
    return
  }

  return <ThankYouPage locale={locale} post={post} />
}

export default Index
