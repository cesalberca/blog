import { Translation } from './translations/Translation'
import { es } from './translations/es'
import { en } from './translations/en'
import { Locale } from './Locale'

export class Translator {
  public readonly translations = new Map<Locale, Translation>([['es', es], ['en', en]])

  public getDefaultLocale(): Translation {
    return this.translations.get('en')!
  }
}
