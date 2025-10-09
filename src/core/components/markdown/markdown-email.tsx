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
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}
