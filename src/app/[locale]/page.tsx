import { setRequestLocale } from 'next-intl/server'
import { NextPage } from 'next'
import { HomePage } from '@/features/home/delivery/home.page'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomePage />
}
export default Page
