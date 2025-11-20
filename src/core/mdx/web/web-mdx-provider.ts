import type { MdxComponentsProvider } from '@/core/mdx/mdx-components-provider'
import type { MdxComponentsMap } from '@/core/mdx/components'
import { getWebMdxComponents } from '@/core/mdx/web/web-components'

export class WebMdxComponentsProvider implements MdxComponentsProvider {
  getComponents(): MdxComponentsMap {
    return getWebMdxComponents()
  }
}
