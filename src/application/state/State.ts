import { Locale } from '../../domain/language'
import { Theme } from '../../ui/theme/Theme'

export class State {
  locale: Locale = Locale.DEFAULT
  theme: Theme = Theme.DEFAULT
  shouldReload = false
}
