import { LanguageService } from './language-service'
import { Language } from './Language'

describe('LanguageService', () => {
  it('should translate a language from a given string', () => {
    const languageService = new LanguageService()

    const actual = languageService.toLanguage('es')

    expect(actual).toEqual(Language.SPANISH)
  })

  it('should fail if no language is found', () => {
    const languageService = new LanguageService()

    expect(() => {
      languageService.toLanguage('non existing language')
    }).toThrowError(new Error('Language could not be found'))
  })
})
