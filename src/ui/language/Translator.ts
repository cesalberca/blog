import { Translation } from './translations/Translation'
import { es } from './translations/es'
import { en } from './translations/en'
import { Locale } from './Locale'

export class Translator {
  public static readonly DEFAULT_LOCALE: Locale = 'en'

  public readonly translations = new Map<Locale, Translation>([['es', es], ['en', en]])

  public getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Translator.DEFAULT_LOCALE)!
  }
}
