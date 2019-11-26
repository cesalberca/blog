import { TranslationService } from '../translation-service'
import { Locale } from '../language/locale'
import { TranslationIdentifiers } from '../language/translations/translation-identifiers'
import { TranslationError } from '../language/translation-error'
import { Translator } from '../language/translator'

jest.mock('../language/Translator')

describe('TranslationService', () => {
  let translationService: TranslationService

  beforeEach(() => {
    translationService = new TranslationService(new Translator())
  })

  it('should translate a given key', () => {
    const actual = translationService.translate(
      Locale.EN,
      'existingKey' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('foo')
  })

  it('should give default translation of a given key if it does not exist in the given locale', () => {
    const actual = translationService.translate(
      Locale.ES,
      'nonExistingKeyInSpanish' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('baz')
  })

  it('should error if translation is not found neither in the given locale or the default locale', () => {
    expect(() => {
      translationService.translate(Locale.ES, 'nonExistingKey' as keyof TranslationIdentifiers)
    }).toThrowError(
      new TranslationError('Translation for key "nonExistingKey" in locale "1" could not be found')
    )
  })

  it('should return the default locale if the given locale does not exist', () => {
    const NON_EXISTING_LOCALE = 99
    const actual = translationService.translate(
      NON_EXISTING_LOCALE,
      'existingKey' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('foo')
  })

  it('should translate locale to string', () => {
    const en = translationService.toString(Locale.EN)
    const es = translationService.toString(Locale.ES)
    const defaultLocale = translationService.toString(Locale.DEFAULT)

    expect(en).toEqual('en')
    expect(es).toEqual('es')
    expect(defaultLocale).toEqual('en')
  })

  it('should throw an error if locale is not matched to string', () => {
    expect(() => {
      const NON_EXISTING_LOCALE = 99
      translationService.toString(NON_EXISTING_LOCALE)
    }).toThrowError(new TranslationError('Locale 99 not found'))
  })

  it('should translate string to locale', () => {
    const en = translationService.toLocale('en')
    const es = translationService.toLocale('es')

    expect(en).toEqual(Locale.EN)
    expect(es).toEqual(Locale.ES)
  })

  it('should throw an error if string is not matched to locale', () => {
    expect(() => {
      translationService.toLocale('NON_EXISTING_LOCALE')
    }).toThrowError(
      new TranslationError('String NON_EXISTING_LOCALE could not be mapped to a locale')
    )
  })
})
