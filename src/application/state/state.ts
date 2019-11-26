import { Theme } from '../../ui/theme/theme'
import { Locale } from '../../domain/language/locale'
import { Injectable } from '../../injectable'

@Injectable()
export class State {
  locale: Locale = Locale.DEFAULT
  theme: Theme = Theme.DEFAULT
  shouldReload = false
}
