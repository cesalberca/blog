import type { MDXComponents } from 'mdx/types'

import {
  type ComponentProps,
  createElement,
  type LinkHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import { cn } from '@/lib/utils'
import { Link } from '@/core/components/link/link'

// This file needs to be here

function CustomLink(props: LinkHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href} className={props.className ?? ''}>
      {props.children}
    </Link>
  )
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
        className: 'font-mono',
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
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
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

const customComponents: ComponentProps<any>['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
  pre: ({ children }: { children: ReactNode }) => <pre className="p-0 font-mono">{children}</pre>,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}
