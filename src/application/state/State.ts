import { Theme } from '../../ui/theme/Theme'
import { Locale } from '../../domain/language/Locale'

export class State {
  locale: Locale = Locale.DEFAULT
  theme: Theme = Theme.DEFAULT
  shouldReload = false
}
