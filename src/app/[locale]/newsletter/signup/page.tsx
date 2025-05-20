import { NextPage } from 'next'
import { NewsletterSignupPage } from '@/features/newsletter/delivery/newsletter-signup.page'

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({ params }) => {
  return <NewsletterSignupPage />
}

export default Page
