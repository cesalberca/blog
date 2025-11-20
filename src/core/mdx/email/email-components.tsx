import type { HTMLAttributes, JSX, LinkHTMLAttributes, PropsWithChildren } from 'react'
import { createEmailHeading } from '@/core/mdx/email/email-headings'
import { Link as EmailLink } from '@/features/email/delivery/components/link/link'
import { CodeInline, Text } from '@react-email/components'
import { CodeBlock } from '@/features/email/delivery/components/code-block/code-block'
import type { PrismLanguage } from '@react-email/code-block'
import type { MdxComponentsMap } from '@/core/mdx/components'
import { EmailAlert } from '@/core/mdx/email/email-alert'

export function getEmailMdxComponents(): MdxComponentsMap {
  return {
    h1: createEmailHeading(1),
    h2: createEmailHeading(2),
    h3: createEmailHeading(3),
    h4: createEmailHeading(4),
    h5: createEmailHeading(5),
    h6: createEmailHeading(6),
    ul: (props: HTMLAttributes<HTMLUListElement>) => {
      return <ul className="text-xl" {...props}></ul>
    },
    ol: (props: HTMLAttributes<HTMLOListElement>) => {
      return <ol className="text-xl" {...props}></ol>
    },
    strong: (props: HTMLAttributes<HTMLElement> & PropsWithChildren) => {
      return <strong className="text-primary">{props.children}</strong>
    },
    a: (props: LinkHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{ href: string }>) => {
      let href = props.href as string
      if (href?.startsWith('/')) {
        href = (process.env['NEXT_PUBLIC_URL'] ?? '') + href
      }
      const className = props.className ?? ''
      return (
        <EmailLink href={href} className={className}>
          {props.children}
        </EmailLink>
      )
    },
    blockquote: EmailAlert,
    p: (props: HTMLAttributes<HTMLParagraphElement> & PropsWithChildren) => {
      return <Text className="text-lg" {...props}></Text>
    },
    code: (props: HTMLAttributes<HTMLElement> & PropsWithChildren) => {
      return (
        <CodeInline className="text-foreground py-1 px-2 bg-secondary rounded-md font-mono">
          {props.children}
        </CodeInline>
      )
    },
    pre: (props: { children?: JSX.Element }) => {
      const codeContent = props.children?.props?.children ?? ''
      const className = props.children?.props?.className ?? ''
      const language = className.startsWith('language-') ? className.replace('language-', '') : 'typescript'
      return <CodeBlock code={codeContent} language={language as PrismLanguage}></CodeBlock>
    },
  }
}
