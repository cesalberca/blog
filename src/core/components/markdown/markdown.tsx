import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'

export const Markdown: FC<{ value: string }> = async ({ value }) => {
  return <ReactMarkdown>{value}</ReactMarkdown>
}
