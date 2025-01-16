import { TalksPage } from '../../../features/talks/delivery/talks.page'
import { NextPage } from 'next'

export const metadata = {
  title: 'Talks',
  description: `Here are all the talks I've given.`,
}

const Index: NextPage<{ params: { locale: string } }> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <TalksPage />
}

export default Index
