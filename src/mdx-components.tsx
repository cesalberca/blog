import type { MDXComponents } from 'mdx/types'

import Link from 'next/link'
import React, { type ComponentProps, createElement } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import { cn } from '@/lib/utils'

function CustomLink(props: React.LinkHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren<{ href: string }>) {
  let href = props.href

  if (href.startsWith('/')) {
    return <Link {...props}>{props.children}</Link>
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Code({ children, ...props }: { children: string; className: string }) {
  const className = props?.className ?? ''
  const match = /language-(\w+)/.exec(className ?? '')
  return match ? (
    <SyntaxHighlighter
      {...props}
      language={match[1]}
      PreTag="div"
      style={dark}
      codeTagProps={{
        style: {
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code
      {...props}
      className={cn(className, 'bg-muted px-[4px] py-[2px] mx-[2px] rounded not-prose text-base font-mono')}
    >
      {children}
    </code>
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children)
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

const customComponents: ComponentProps<any>['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
  pre: ({ children }: { children: React.ReactNode }) => <pre className="p-0">{children}</pre>,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}
