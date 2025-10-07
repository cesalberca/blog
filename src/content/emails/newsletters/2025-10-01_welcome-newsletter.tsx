import type { FC } from 'react'
import { NewsletterTemplate } from '@/emails/newsletter-template'
import { Markdown } from '@react-email/markdown'

export const WelcomeNewsletter: FC = () => {
  return (
    <NewsletterTemplate
      browserUrl="https://cesalberca.com/newsletters/2025-10-01_welcome-newsletter"
      title="Welcome to the Newsletter!"
      description="Hello there! We're excited to welcome you to our newsletter where we share the latest insights, updates, and
        stories from our blog."
    >
      <Markdown>
        {`## Hello, this is my email template

This is meant to be rendered as a paragraph. There is no way around it.
      `}
      </Markdown>
    </NewsletterTemplate>
  )
}

export default WelcomeNewsletter
