import type { FC } from 'react'
import { EmailTemplate } from '@/emails/email-template'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'

interface ContactNotificationEmailProps {
  name: string
  email: string
  message: string
  date: string
}

export const ContactNotificationEmail: FC<ContactNotificationEmailProps> = ({ name, email, message, date }) => {
  return (
    <EmailTemplate
      title="New Contact Form Submission"
      description={`You have received a new contact form submission from ${name}.`}
    >
      <MarkdownEmail>{`
You have received a new message through your contact form:

**From:** ${name}
**Email:** ${email}
**Date:** ${date}

**Message:**
${message}

---

You can reply directly to this email to respond to ${name}.
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default ContactNotificationEmail
