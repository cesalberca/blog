import { TalksPage } from '../../../features/talks/delivery/talks.page'
import type { NextPage } from 'next'
import type { Locale } from '@/core/i18n/locale'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

const Index: NextPage<{ params: Promise<{ locale: Locale }> }> = async ({ params }) => {
  const { locale } = await params
  return <TalksPage locale={locale} />
}

export default Index
