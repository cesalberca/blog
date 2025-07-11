import { NextPage } from 'next'
import { CookiesPage } from '@/features/cookies/delivery/cookies.page'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  return <CookiesPage />
}

export default Page
