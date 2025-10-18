import { type FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

export const WelcomeNewsletter: FC = () => {
  return <NewsletterEmailLoader slug={`_the-use-case-pattern.mdx`} />
}

export default WelcomeNewsletter
