import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { createWebHeading } from '@/core/mdx/web/web-headings'
import { CustomWebLink } from '@/core/mdx/web/web-link'
import { WebCode } from '@/core/mdx/web/web-code'
import { CustomAlert } from '@/core/mdx/web/web-alert'
import type { MdxComponentsMap } from '@/core/mdx/components'

export function getWebMdxComponents(): MdxComponentsMap {
  return {
    h1: createWebHeading(1),
    h2: createWebHeading(2),
    h3: createWebHeading(3),
    h4: createWebHeading(4),
    h5: createWebHeading(5),
    h6: createWebHeading(6),
    a: CustomWebLink,
    code: WebCode,
    blockquote: CustomAlert,
    p: (props: HTMLAttributes<HTMLParagraphElement> & PropsWithChildren) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground" {...props}></p>
    ),
    ul: (props: HTMLAttributes<HTMLUListElement>) => {
      return <ul className="my-6 ml-6 list-disc space-y-2" {...props}></ul>
    },
    ol: (props: HTMLAttributes<HTMLOListElement>) => {
      return <ol className="my-6 ml-6 list-decimal space-y-2" {...props}></ol>
    },
    strong: (props: HTMLAttributes<HTMLElement> & PropsWithChildren) => {
      return <strong className="font-semibold text-foreground" {...props} />
    },
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="p-0 text-sm font-mono not-prose mb-6">{children}</pre>
    ),
  }
}
