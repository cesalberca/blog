import { Language } from './Language'

export class LanguageService {
  toLanguage(string: string): Language {
    switch (string.toLowerCase()) {
      case 'es':
        return Language.SPANISH
      case 'en':
        return Language.ENGLISH
      default:
        throw new Error('Language could not be found')
    }
  }

  static create() {
    return new LanguageService()
  }
}
