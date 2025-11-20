import { type FC } from 'react'
import { NewsletterTemplate } from '@/features/email/delivery/templates/newsletter-template'
import type { NewsletterMetadata } from '@/features/email/domain/newsletter-metadata'
import path from 'path'
import * as runtime from 'react/jsx-runtime'
import { type EvaluateOptions, evaluateSync } from '@mdx-js/mdx'
import fs from 'node:fs'
import { MdxComponentsFactory } from '@/core/mdx/mdx-components-factory'

export const NewsletterEmailLoader: FC<{ slug: string }> = ({ slug }) => {
  const file = path.join(process.cwd(), 'src', 'content', 'emails', 'newsletter', slug, 'en.mdx')
  const code = fs.readFileSync(file, { encoding: 'utf8' })

  const { default: Content, metadata } = evaluateSync(code, {
    ...(runtime as Readonly<EvaluateOptions>),
    useMDXComponents: () => MdxComponentsFactory.get('email'),
  })

  const typedMetadata = metadata as NewsletterMetadata

  return (
    <NewsletterTemplate
      browserUrl={typedMetadata.slug}
      title={typedMetadata.title}
      description={typedMetadata.description}
    >
      <Content />
    </NewsletterTemplate>
  )
}
