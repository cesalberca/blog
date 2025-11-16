import { type FC } from 'react'
import { NewsletterEmailLoader } from '@/features/email/delivery/newsletter-email-loader/newsletter-email-loader'

const FrontendArchitectureNewsletter: FC & { title: string } = () => {
  return <NewsletterEmailLoader slug={`_run-use-cases-using-chain-of-responsibility-and-middlewares`} />
}

FrontendArchitectureNewsletter.title = 'Use Cases, The Chain Of Responsibility Pattern and Middlewares'

export default FrontendArchitectureNewsletter
