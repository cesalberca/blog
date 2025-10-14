import type { FC } from 'react'
import { NewsletterTemplate } from '@/emails/newsletter-template'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import path from 'path'
import * as runtime from 'react/jsx-runtime'
import { evaluateSync, type EvaluateOptions } from '@mdx-js/mdx'
import fs from 'node:fs'

export const metadata: NewsletterMetadata = {
  subject: 'The Hemingway Bridge',
}

export const WelcomeNewsletter: FC = () => {
  const file = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletters', `_the-use-case-pattern.mdx`)

  const code = fs.readFileSync(file, { encoding: 'utf8' })
  const { default: Content } = evaluateSync(code, { ...(runtime as Readonly<EvaluateOptions>) })

  return (
    <NewsletterTemplate
      browserUrl="https://cesalberca.com/newsletters/2025-10-01_welcome-newsletter"
      title="The Hemingway Bridge"
      description="The famous and prolific novelist Ernest Hemingway came up with a mechanism to avoid writer's block."
    >
      <Content />
    </NewsletterTemplate>
  )
}

export default WelcomeNewsletter
