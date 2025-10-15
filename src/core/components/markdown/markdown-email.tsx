import type { FC } from 'react'
import { Markdown } from '@react-email/markdown'

export const MarkdownEmail: FC<{ children: string }> = ({ children }) => {
  return (
    <div>
      <Markdown
        markdownCustomStyles={{
          link: {
            color: '#171717',
          },
          bold: {
            color: '#171717',
          },
          codeInline: {
            color: '#737373',
            paddingInline: '8px',
            paddingBlock: '4px',
            background: '#f5f5f5',
            borderRadius: '4px',
          },
          blockQuote: {
            background: '#f5f5f5',
            color: '#737373',
            border: 'none',
            borderLeft: '4px',
            borderRadius: '8px',
            borderBottom: '0',
            borderTop: '0',
            borderRight: '0',
            borderColor: '#e5e5e5',
            borderStyle: 'solid',
            padding: '8px',
            paddingLeft: '16px',
            margin: '0px',
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}
