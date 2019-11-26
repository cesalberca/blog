import { Theme } from '../../ui/theme/Theme'
import { Locale } from '../../domain/language/Locale'
import { Injectable } from '../../injectable'

@Injectable()
export class State {
  locale: Locale = Locale.DEFAULT
  theme: Theme = Theme.DEFAULT
  shouldReload = false
}
