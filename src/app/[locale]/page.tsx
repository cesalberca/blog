import { NextPage } from 'next'
import { HomePage } from '@/features/home/delivery/home.page'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  return <HomePage />
}
export default Page
