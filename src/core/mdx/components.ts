import type { MDXComponents } from 'mdx/types'

/**
 * Shared base MDX components that MUST exist for all targets (web | email).
 *
 * Both providers must return at least these components so that MDX content
 * renders consistently. Providers may add extra keys on top of this base set.
 */
export type MdxBaseComponents = Required<
  Pick<
    MDXComponents,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'p' | 'blockquote' | 'code' | 'pre' | 'ul' | 'ol' | 'strong'
  >
>

export type MdxComponentsMap = MdxBaseComponents & MDXComponents
