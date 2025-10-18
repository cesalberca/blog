import type { FC } from 'react'
import { EmailTemplate } from '@/features/email/delivery/templates/email-template'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'

interface ContactConfirmationEmailProps {
  name: string
}

export const ContactConfirmationEmail: FC<ContactConfirmationEmailProps> = ({ name }) => {
  return (
    <EmailTemplate
      title="Thanks for reaching out!"
      description="I've received your message and I will get back to you as soon as possible."
    >
      <MarkdownEmail>{`
Hey ${name}!

Thanks for reaching out through my [website](https://cesalberca.com/). **I've received your message** and I'll get back to you **as soon as I can**.

**What happens next?**
I typically respond to messages within 24-48 hours during business days. If you prefer, you can [book a call](https://cesalberca.com/chat).

**In the meantime...**
Feel free to explore my [blog](https://cesalberca.com/blog) for articles on frontend architecture, or check out my [case studies](https://cesalberca.com/case-studies) to see how I've helped other teams build scalable applications.

Looking forward to **connecting with you!**
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default ContactConfirmationEmail
