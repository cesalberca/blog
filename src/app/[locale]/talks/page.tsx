import { TalksPage } from '../../../features/talks/delivery/talks.page'
import { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

const Index: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <TalksPage />
}

export default Index
