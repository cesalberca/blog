import { TalksPage } from '../../../features/talks/delivery/talks.page'
import { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/core/i18n/locale'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

const Index: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <TalksPage locale={locale as Locale} />
}

export default Index
