import type { Theme } from './theme'
import type { Locale } from '../../domain/language/locale'

export interface State {
  theme: Theme
  locale: Locale
}
