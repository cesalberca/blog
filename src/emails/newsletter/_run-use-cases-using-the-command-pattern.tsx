import { type FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

const FrontendArchitectureNewsletter: FC & { title: string } = () => {
  return <NewsletterEmailLoader slug={`_run-use-cases-using-the-command-pattern`} />
}

FrontendArchitectureNewsletter.title = 'Run Use Cases Using The Command Pattern'

export default FrontendArchitectureNewsletter
