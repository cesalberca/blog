import type { FC } from 'react'
import { EmailTemplate } from '@/emails/email-template'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'

interface ConfirmationEmailProps {
  firstName?: string
  confirmationToken: string
}

export const ConfirmationEmail: FC<ConfirmationEmailProps> = ({ firstName, confirmationToken }) => {
  const confirmationUrl = `${process.env['NEXT_PUBLIC_URL']}/newsletter/confirm?token=${confirmationToken}`

  return (
    <EmailTemplate
      title="Confirm your newsletter subscription"
      description="Just one click away from joining the Frontend Architecture newsletter community!"
    >
      <MarkdownEmail>{`
Hey ${firstName ?? 'there'}!

**Why you got this email**: Your email has been submitted in the signup form at [cesalberca.com](https://cesalberca.com).

If you didn't sign up, no worries at all, feel free to ignore this email and you won't get another email from me.

**What you need to do**: If you _did_ sign up and want to join the Frontend Architecture newsletter, just click the button below to confirm.

[**Confirm the Subscription**](${confirmationUrl})

Or copy and paste this link: ${confirmationUrl}

Looking forward to sharing some great frontend insights with you!
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default ConfirmationEmail
