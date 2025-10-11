import type { FC } from 'react'
import { Prism as SyntaxHighlighter, type SyntaxHighlighterProps } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'
import { Link } from '@/core/components/link/link'

export const Markdown: FC<{ value: string; className?: string }> = ({ value, className }) => {
  return (
    <div className={cn('prose prose-zinc dark:prose-invert text-current', className)}>
      <ReactMarkdown
        components={{
          code({ children, className, ...rest }) {
            const match = /language-(\w+)/.exec(className ?? '')
            return match ? (
              <SyntaxHighlighter {...(rest as SyntaxHighlighterProps)} PreTag="div" language={match[1]} style={dark}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
          a({ href, children }) {
            return <Link href={href ?? ''}>{children}</Link>
          },
        }}
      >
        {value}
      </ReactMarkdown>
    </div>
  )
}
