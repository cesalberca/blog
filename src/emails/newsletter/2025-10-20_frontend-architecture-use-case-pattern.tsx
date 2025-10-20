import { type FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

export const WelcomeNewsletter: FC = () => {
  return <NewsletterEmailLoader slug={`frontend-architecture-use-case-pattern`} />
}

export default WelcomeNewsletter
