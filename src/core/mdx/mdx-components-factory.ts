import type { MdxComponentsMap } from '@/core/mdx/components'
import type { MdxComponentsProvider } from '@/core/mdx/mdx-components-provider'

export class MdxComponentsFactory {
  static get(target: 'web' | 'email'): MdxComponentsMap {
    if (target === 'web') {
      const { WebMdxComponentsProvider } =
        require('./web/web-mdx-provider') as typeof import('@/core/mdx/web/web-mdx-provider')
      const provider = new WebMdxComponentsProvider()
      return provider.getComponents()
    }

    const { EmailMdxComponentsProvider } =
      require('./email/email-mdx-provider') as typeof import('@/core/mdx/email/email-mdx-provider')
    const provider: MdxComponentsProvider = new EmailMdxComponentsProvider()
    return provider.getComponents()
  }
}
