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
Hey ${firstName ? firstName : 'there'}!

**Why you got this email**: Someone (hopefully you!) entered your email in the signup form at [cesalberca.com](https://cesalberca.com).

If you didn't sign up, no worries at all – you won't get another email from me, and your email hasn't been "hacked" or anything. Some folks just like entering random emails in forms (weird, I know), but your info is totally safe.

**What you need to do**: If you DID sign up and want to join the Frontend Architecture newsletter, just click the button below to confirm. If not, feel free to ignore this and move on with your awesome day.

[**Confirm My Subscription**](${confirmationUrl})

Or copy and paste this link: ${confirmationUrl}

If you really didn't sign up, you can just archive this email – you won't hear from me again. Sorry for any confusion!

Looking forward to sharing some great frontend insights with you (if you want them)!

César
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default ConfirmationEmail
