import type { FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

const FrontendArchitectureNewsletter: FC & { title: string } = () => {
  return <NewsletterEmailLoader slug={`_why-you-should-use-the-repository-pattern-to-interact-with-data`} />
}

FrontendArchitectureNewsletter.title = 'Why You Should Use The Repository Pattern to Interact with Data'

export default FrontendArchitectureNewsletter
