import { createElement, type FC } from 'react'

export function createEmailHeading(level: number): FC<{ children: string }> {
  const Heading: FC<{ children: string }> = ({ children }) => {
    return createElement(`h${level}`, { className: 'text-primary' }, children)
  }

  Heading.displayName = `Heading${level}`

  return Heading
}
