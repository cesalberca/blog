import type { FC } from 'react'
import { EmailTemplate } from '@/emails/email-template'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'

interface WelcomeEmailProps {
  firstName?: string
}

export const WelcomeEmail: FC<WelcomeEmailProps> = () => {
  return (
    <EmailTemplate
      title="Welcome {{{FIRST_NAME}}} to the Newsletter!"
      description="I'm thrilled to welcome you to this newsletter. You've just joined a group of curious minds who are
        passionate about Frontend Architecture and continuous learning."
    >
      <MarkdownEmail>{`
I'm thrilled you've decided to sign up to this newsletter to learn about **Frontend Architecture** with me. With this step you are creating a future for yourself where you'll learn:

* Applying use cases to unlock the full potential to your architecture
* Learning design patterns like Chain of responsibility, Decorator, Command and more
* Integrating AI tools to maximize the quality of generated code

If you really want to make sure you get the newsletter, I kindly ask to reply to this email with “Hey César” to make sure it doesn't end up in Spam or [add me as a contact](https://cesalberca.com/assets/email/César%20Alberca.vcf). It takes 10 seconds. Writing each newsletter takes me ~4 hours.

Great, thank you very much! You'll be now receiving recurrent emails from me about **Frontend Architecture**. While I type away the next newsletter, you can read my [latest blogpost here](https://cesalberca.com/blog/latest).
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default WelcomeEmail
