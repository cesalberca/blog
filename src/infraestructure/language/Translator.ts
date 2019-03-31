import { Translation } from './translations/Translation'
import { es } from './translations/es'
import { en } from './translations/en'
import { Locale } from './Locale'

export class Translator {
  public readonly translations: Map<Locale, Translation>

  private constructor() {
    this.translations = new Map<Locale, Translation>([[Locale.ES, es], [Locale.EN, en]])
  }

  public getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Locale.DEFAULT)!
  }

  public static create() {
    return new Translator()
  }
}
