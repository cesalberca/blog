import type { FC } from 'react'
import { NewsletterTemplate } from '@/emails/newsletter-template'
import { MarkdownEmail } from '@/core/components/markdown/markdown-email'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'

export const metadata: NewsletterMetadata = {
  subject: 'The Hemingway Bridge',
}

export const WelcomeNewsletter: FC = () => {
  return (
    <NewsletterTemplate
      browserUrl="https://cesalberca.com/newsletters/2025-10-01_welcome-newsletter"
      title="The Hemingway Bridge"
      description="The famous and prolific novelist Ernest Hemingway came up with a mechanism to avoid writer's block."
    >
      <MarkdownEmail>
        {`
The famous and prolific novelist [Ernest Hemingway](https://en.wikipedia.org/wiki/Ernest_Hemingway) came up with a mechanism to avoid writer's block. When he was about to finish a writing session, he would leave some room to **write down his next steps**, noting the point where he had left off, his **major obstacles** or difficulties in wrapping up a plot, or the most important **open question to be resolved**.

The idea is to provide multiple starting points for your _future self_, making it as easy as possible to pick up where you left off. This way of building bridges to the future is a very smart way to work, and you can even **apply it to coding**.

Instead of ending your programming session with a clean \`git status\` or all tests in green, you can try to **conclude your session with a failing test** for the next feature or refactor you want to tackle. This way, regaining context and focus will be easier when you return to it.

      `}
      </MarkdownEmail>
    </NewsletterTemplate>
  )
}

export default WelcomeNewsletter
