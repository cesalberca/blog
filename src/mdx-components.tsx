import type { MDXComponents } from 'mdx/types'
import { MdxComponentsFactory } from '@/core/mdx/mdx-components-factory'

// This file needs to be here

const customComponents = MdxComponentsFactory.get('web')

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  }
}
