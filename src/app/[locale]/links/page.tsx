import type { NextPage } from 'next'
import { LinksPage } from '../../../features/links/delivery/links.page'
import { setRequestLocale } from 'next-intl/server'

const Page: NextPage<{ params: { locale: string } }> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <LinksPage />
}

export default Page
