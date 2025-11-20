import { createElement, type FC } from 'react'
import { slugify } from '@/core/mdx/web/slugify'

export function createWebHeading(level: number): FC<{ children: string }> {
  const Heading: FC<{ children: string }> = ({ children }) => {
    const slug = slugify(children)
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}
