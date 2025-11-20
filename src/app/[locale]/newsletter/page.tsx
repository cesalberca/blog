import type { NextPage } from 'next'
import { NewslettersPage } from '@/features/newsletter/delivery/newsletters.page'
import type { Locale } from '@/core/i18n/locale'

const Page: NextPage<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
  const { locale } = await params

  return <NewslettersPage locale={locale} />
}

export default Page
