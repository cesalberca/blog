import type { FC } from 'react'
import { NewsletterTemplate } from '@/emails/newsletter-template'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import path from 'path'
import * as runtime from 'react/jsx-runtime'
import { evaluateSync, type EvaluateOptions } from '@mdx-js/mdx'
import fs from 'node:fs'
import { CodeBlock } from '@/features/email/delivery/code-block/code-block'
import type { PrismLanguage } from '@react-email/code-block'
import { CodeInline } from '@react-email/components'

export const metadata: NewsletterMetadata = {
  subject: 'The Hemingway Bridge',
}

export const WelcomeNewsletter: FC = () => {
  const file = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletters', `_the-use-case-pattern.mdx`)

  const code = fs.readFileSync(file, { encoding: 'utf8' })
  const { default: Content } = evaluateSync(code, {
    ...(runtime as Readonly<EvaluateOptions>),
    useMDXComponents: () => ({
      code: props => {
        console.log({ props })
        return <CodeInline>{props.children}</CodeInline>
      },
      pre: props => {
        const codeContent = props.children?.props?.children ?? ''

        const className = props.children?.props?.className ?? ''
        const language = className.startsWith('language-') ? className.replace('language-', '') : 'typescript'

        return <CodeBlock code={codeContent} language={language as PrismLanguage}></CodeBlock>
      },
    }),
  })

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
