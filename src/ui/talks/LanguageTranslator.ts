import { Language } from '../../domain/talks/Language'

export class LanguageTranslator {
  public translate(language: Language) {
    switch (language) {
      case Language.ENGLISH:
        return ''
      case Language.SPANISH:
        return ''
    }
  }
}
