import { type FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

const FrontendArchitectureNewsletter: FC & { title: string } = () => {
  return <NewsletterEmailLoader slug={`frontend-architecture-use-case-pattern`} />
}

FrontendArchitectureNewsletter.title = 'The "Only" Pattern you Need in Frontend Architecture'

export default FrontendArchitectureNewsletter
