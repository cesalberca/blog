import type { FC } from 'react'
import { NewsletterTemplate } from '@/emails/newsletter-template'

export const WelcomeNewsletter: FC = () => {
  return (
    <NewsletterTemplate
      title="Welcome to Our Newsletter! 📧"
      description="Hello there! We're excited to welcome you to our newsletter where we share the latest insights, updates, and
        stories from our blog."
    >
      <h2>What to Expect</h2>

      <p>In each newsletter, you&#39;ll find:</p>

      <ul>
        <li>
          <strong>Latest blog posts</strong> with summaries and key insights
        </li>
        <li>
          <strong>Tech insights</strong> from our development journey
        </li>
        <li>
          <strong>Community highlights</strong> and interesting projects
        </li>
        <li>
          <strong>Upcoming events</strong> and announcements
        </li>
      </ul>
    </NewsletterTemplate>
  )
}

export default WelcomeNewsletter
