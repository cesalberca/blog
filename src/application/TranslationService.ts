import { Locale, TranslationError, TranslationIdentifiers, Translator } from '../ui/language'

export class TranslationService {
  private readonly translator = new Translator()

  public translate(locale: Locale, key: keyof TranslationIdentifiers): string {
    const language = this.translator.translations.get(locale)

    if (language !== undefined) {
      const translation = language.get(key)

      if (translation !== undefined) {
        return translation
      } else {
        throw new TranslationError('Translation could not be found')
      }
    }

    return this.translator.getDefaultLocaleTranslation().get(key)!
  }
}
