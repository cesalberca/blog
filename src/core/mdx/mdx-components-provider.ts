import type { MdxComponentsMap } from '@/core/mdx/components'

export interface MdxComponentsProvider {
  getComponents(): MdxComponentsMap
}
