import { Translation } from './translations/translation'
import { es } from './translations/es'
import { en } from './translations/en'
import { Locale } from './locale'
import { Injectable } from '../../injectable'

@Injectable()
export class Translator {
  readonly translations: Map<Locale, Translation> = new Map<Locale, Translation>([
    [Locale.ES, es],
    [Locale.EN, en]
  ])

  getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Locale.DEFAULT)!
  }
}
