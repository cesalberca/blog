import { Theme } from './theme.js'
import { Locale } from '../../domain/language/locale.js'

export interface State {
  theme: Theme;
  locale: Locale
}
