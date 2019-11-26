import { Locale } from '../locale'
import { Translation } from '../translations/translation'

const en = new Map<string, string>([
  ['existingKey', 'foo'],
  ['nonExistingKeyInSpanish', 'baz']
])
const es = new Map<string, string>([['existingKey', 'bar']])

export class Translator {
  readonly translations: Map<Locale, Translation>

  constructor() {
    this.translations = new Map<Locale, any>([
      [Locale.ES, es],
      [Locale.EN, en]
    ])
  }

  getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Locale.DEFAULT)!
  }

  static create() {
    return new Translator()
  }
}