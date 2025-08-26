import type { NextPage } from 'next'
import { NewsletterPage } from '@/features/newsletter/delivery/newsletter.page'
import { Locale } from '@/core/i18n/locale'

const Page: NextPage<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
  await params

  return <NewsletterPage />
}

export default Page
