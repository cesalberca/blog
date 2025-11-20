import type { MdxComponentsProvider } from '@/core/mdx/mdx-components-provider'
import type { MdxComponentsMap } from '@/core/mdx/components'
import { getEmailMdxComponents } from '@/core/mdx/email/email-components'

export class EmailMdxComponentsProvider implements MdxComponentsProvider {
  getComponents(): MdxComponentsMap {
    return getEmailMdxComponents() as MdxComponentsMap
  }
}
