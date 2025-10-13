import type { FC } from 'react'
import { Markdown } from '@react-email/markdown'

export const MarkdownEmail: FC<{ children: string }> = ({ children }) => {
  return (
    <div>
      <Markdown
        markdownCustomStyles={{
          link: {
            color: 'white',
          },
          bold: {
            color: 'white',
          },
          codeInline: {
            color: 'white',
            paddingInline: '8px',
            paddingBlock: '4px',
            background: 'oklch(0.269 0 0)',
            borderRadius: '4px',
          },
          blockQuote: {
            background: 'oklch(0.269 0 0)',
            color: 'white',
            border: 'none',
            borderLeft: '4px',
            borderRadius: '8px',
            borderBottom: '0',
            borderTop: '0',
            borderRight: '0',
            borderColor: '#444444',
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
