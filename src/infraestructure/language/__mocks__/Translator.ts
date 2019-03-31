import { Locale, Translation } from '../index'

const en = new Map<string, string>([['existingKey', 'foo'], ['nonExistingKeyInSpanish', 'baz']])
const es = new Map<string, string>([['existingKey', 'bar']])

export class Translator {
  public readonly translations: Map<Locale, Translation>

  private constructor() {
    this.translations = new Map<Locale, any>([[Locale.ES, es], [Locale.EN, en]])
  }

  public getDefaultLocaleTranslation(): Translation {
    return this.translations.get(Locale.DEFAULT)!
  }

  public static create() {
    return new Translator()
  }
}
