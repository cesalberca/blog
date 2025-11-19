import type { MDXComponents } from 'mdx/types'

import {
  Children,
  cloneElement,
  type ComponentProps,
  createElement,
  isValidElement,
  type LinkHTMLAttributes,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84'
import { cn } from '@/lib/utils'
import { Link } from '@/core/components/link/link'
import { Alert } from '@/core/components/alert/alert'
import { parseAdmonition } from '@/core/components/alert/parse-admonition'
import { cleanPrefix } from '@/core/components/alert/clean-prefix'

// This file needs to be here

function CustomLink(props: LinkHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href} className={props.className ?? ''}>
      {props.children}
    </Link>
  )
}

export const transformChildrenToString = (children: ReactNode | ReactNode[]): string => {
  if (!Array.isArray(children) && !isValidElement(children)) {
    return childToString(children)
  }

  return Children.toArray(children).reduce((text: string, child: ReactNode): string => {
    let newText = ''

    if (hasChildren(child)) {
      newText = transformChildrenToString(child.props.children)
    } else if (isValidElement(child)) {
      newText = ''
    } else {
      newText = childToString(child)
    }

    return text.concat(newText)
  }, '')
}

const childToString = (child?: ReactNode): string => {
  if (typeof child === 'undefined' || child === null || typeof child === 'boolean') {
    return ''
  }

  if (JSON.stringify(child) === '{}') {
    return ''
  }

  return child.toString()
}

const hasChildren = (element: ReactNode): element is ReactElement<{ children: ReactNode | ReactNode[] }> =>
  isValidElement<{ children?: ReactNode[] }>(element) && Boolean(element.props.children)

function CustomAlert({ className, children }: HTMLQuoteElement & PropsWithChildren) {
  const allText = transformChildrenToString(children).trim()

  const parsed = parseAdmonition(allText)
  if (!parsed) {
    return <blockquote className={className ?? ''}>{children}</blockquote>
  }

  return <Alert type={parsed.type}>{cleanPrefix(children)}</Alert>
}

function Code({ children, ...props }: { children: string; className: string }) {
  const className = props?.className ?? ''
  const match = /language-(\w+)/.exec(className ?? '')
  return match ? (
    <SyntaxHighlighter
      {...props}
      language={match[1]}
      CodeTag="div"
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
      className={cn(className, 'bg-muted px-[4px] py-[2px] mx-[2px] rounded not-prose text-foreground font-mono')}
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
  blockquote: CustomAlert,
  pre: ({ children }: { children: ReactNode }) => <pre className="p-0 text-sm font-mono not-prose">{children}</pre>,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}
