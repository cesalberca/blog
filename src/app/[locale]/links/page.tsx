import type { NextPage } from 'next'
import { LinksPage } from '../../../features/links/delivery/links.page'
import { setRequestLocale } from 'next-intl/server'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <LinksPage />
}

export default Page
