import type { FC } from 'react'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'
import { EmailTemplate } from '@/emails/email-template'
import { Container, Text } from '@react-email/components'
import { Button } from '@/features/email/delivery/button/button'
import { Link } from '@/features/email/delivery/link/link'

interface ConfirmationEmailProps {
  firstName: string
  confirmationToken: string
  email: string
}

export const NewsletterConfirmationEmail: FC<ConfirmationEmailProps> = ({ firstName, confirmationToken, email }) => {
  const confirmationUrl = `${process.env['NEXT_PUBLIC_URL']}/newsletter/confirm?token=${confirmationToken}&email=${encodeURIComponent(email)}`

  return (
    <EmailTemplate
      title="Confirm your newsletter subscription"
      description="Just one click away from joining the Frontend Architecture newsletter community!"
    >
      <MarkdownEmail>{`
Hey ${firstName}!

**Why you got this email**: Your email has been submitted in the signup form at [cesalberca.com](https://cesalberca.com).

If you didn't sign up, you don't need to worry at all, feel free to ignore this email and you won't get another email from me.

**What you need to do**: If you _did_ sign up and want to join the Frontend Architecture Newsletter, just click the button below to confirm.
`}</MarkdownEmail>
      <Container className="text-center  w-2/3">
        <Button link={confirmationUrl}>Confirm the subscription</Button>
        <Text className="text-xs">
          Or copy and paste this link in your browser:
          <br /> <Link href={confirmationUrl}>{confirmationUrl}</Link>
        </Text>
      </Container>

      <MarkdownEmail>{`
Looking forward to sharing some _great_ **frontend architecture** insights with you!
`}</MarkdownEmail>
    </EmailTemplate>
  )
}

export default NewsletterConfirmationEmail
