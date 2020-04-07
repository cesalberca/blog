import { Translation } from './translations/translation.js'
import { es } from './translations/es.js'
import { en } from './translations/en.js'
import { Locale } from './locale.js'
import { Injectable } from '../types/injectable.js'

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
