import { Locale } from '../../domain/language'
import { Theme } from '../../ui/theme/Theme'

export class State {
  public locale: Locale = Locale.DEFAULT
  public theme: Theme = Theme.DEFAULT
}
