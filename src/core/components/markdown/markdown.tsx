import type { FC } from 'react'
import { Prism as SyntaxHighlighter, type SyntaxHighlighterProps } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import ReactMarkdown from 'react-markdown'

export const Markdown: FC<{ value: string }> = async ({ value }) => {
  return (
    <ReactMarkdown
      className="prose prose-zinc dark:prose-invert"
      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter {...(rest as SyntaxHighlighterProps)} PreTag="div" language={match[1]} style={dark}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {value}
            </code>
          )
        },
      }}
    >
      {value}
    </ReactMarkdown>
  )
}
