import { Translation } from './translations/Translation'
import { es } from './translations/es'
import { en } from './translations/en'
import { Locale } from './Locale'
import { injectable } from 'inversify'

@injectable()
export class Translator {
  readonly translations: Map<Locale, Translation>

  constructor() {
    this.translations = new Map<Locale, Translation>([
      [Locale.ES, es],
      [Locale.EN, en]
    ])
  }

  getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Locale.DEFAULT)!
  }
}
