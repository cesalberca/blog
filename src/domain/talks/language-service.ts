import { Language } from './language.js'
import { Injectable } from '../types/injectable.js'

@Injectable()
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
}
