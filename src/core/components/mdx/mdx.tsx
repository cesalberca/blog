import Link from 'next/link'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React, { type ComponentProps, createElement } from 'react'

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

function Code({ children, ...props }: { children: string; props: unknown }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
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

const components: ComponentProps<any>['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <div className="text-current prose dark:prose-invert">
      <MDXRemote {...props} components={{ ...components, ...(props.components ?? {}) }} />
    </div>
  )
}
