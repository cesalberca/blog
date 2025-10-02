import type { FC } from 'react'
import { EmailTemplate } from '@/emails/email-template'

interface WelcomeEmailProps {
  firstName?: string
}

export const WelcomeEmail: FC<WelcomeEmailProps> = ({ firstName = 'there' }) => {
  return (
    <EmailTemplate
      title="Welcome to Our Newsletter! 🎉"
      description="I'm thrilled to welcome you to our newsletter community. You've just joined a group of curious minds who are
        passionate about web development, technology, and continuous learning."
    >
      <p>Hi {firstName}!</p>
    </EmailTemplate>
  )
}

export default WelcomeEmail
