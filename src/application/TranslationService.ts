import { Locale, Translator, TranslationError, TranslationIdentifiers } from '../domain/language'

export class TranslationService {
  private readonly translator = new Translator()

  public constructor(private locale: Locale) {}

  public translate(key: keyof TranslationIdentifiers): string {
    const language = this.translator.translations.get(this.locale)

    if (language !== undefined) {
      const translation = language.get(key)

      if (translation !== undefined) {
        return translation
      } else {
        throw new TranslationError('Translation could not be found')
      }
    }

    return this.translator.getDefaultLocale().get(key)!
  }

  public changeLanguage(language: Locale) {
    this.locale = language
  }
}
