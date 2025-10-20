import { createElement, type FC } from 'react'
import { NewsletterTemplate } from '@/features/email/delivery/templates/newsletter-template'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import path from 'path'
import * as runtime from 'react/jsx-runtime'
import { type EvaluateOptions, evaluateSync } from '@mdx-js/mdx'
import fs from 'node:fs'
import { CodeBlock } from '@/features/email/delivery/components/code-block/code-block'
import type { PrismLanguage } from '@react-email/code-block'
import { CodeInline, Text } from '@react-email/components'
import { Link } from '@/features/email/delivery/components/link/link'

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    return createElement(`h${level}`, { className: 'text-primary' }, children)
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

export const NewsletterEmailLoader: FC<{ slug: string }> = ({ slug }) => {
  const file = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletter', slug)
  const code = fs.readFileSync(file, { encoding: 'utf8' })

  const { default: Content, metadata } = evaluateSync(code, {
    ...(runtime as Readonly<EvaluateOptions>),
    useMDXComponents: () => ({
      h1: createHeading(1),
      h2: createHeading(2),
      h3: createHeading(3),
      h4: createHeading(4),
      h5: createHeading(5),
      h6: createHeading(6),
      strong: props => {
        return <strong className="text-primary">{props.children}</strong>
      },
      a: props => {
        return <Link {...props}></Link>
      },
      blockquote: props => {
        return (
          <blockquote
            {...props}
            className="bg-muted text-muted-foreground border-l-4 border-border border-solid rounded-lg p-2 pl-4 m-0 border-t-0 border-b-0 border-r-0"
          ></blockquote>
        )
      },
      p: props => {
        return <Text className="text-lg" {...props}></Text>
      },
      code: props => {
        return (
          <CodeInline className="text-foreground py-1 px-2 bg-secondary rounded-md font-mono">
            {props.children}
          </CodeInline>
        )
      },
      pre: props => {
        const codeContent = props.children?.props?.children ?? ''

        const className = props.children?.props?.className ?? ''
        const language = className.startsWith('language-') ? className.replace('language-', '') : 'typescript'

        return <CodeBlock code={codeContent} language={language as PrismLanguage}></CodeBlock>
      },
    }),
  })

  const typedMetadata = metadata as NewsletterMetadata

  return (
    <NewsletterTemplate
      browserUrl={typedMetadata.slug}
      title={typedMetadata.title}
      description={typedMetadata.description}
    >
      <Content />
    </NewsletterTemplate>
  )
}
