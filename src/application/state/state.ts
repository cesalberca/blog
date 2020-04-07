import { Theme } from '../../ui/theme/theme.js'
import { Locale } from '../../domain/language/locale.js'

export class State {
  locale: Locale = Locale.DEFAULT
  theme: Theme = Theme.DEFAULT
  shouldReload = false
}
