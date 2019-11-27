import { TranslationService } from '../translation-service'
import { Locale } from '../language/locale'
import { TranslationIdentifiers } from '../language/translations/translation-identifiers'
import { TranslationError } from '../language/translation-error'
import { Translator } from '../language/translator'
import { instance, mock, when } from 'ts-mockito'

describe('TranslationService', () => {
  it('should translate a given key', () => {
    const { translationService } = setup()

    const actual = translationService.translate(
      Locale.EN,
      'existingKey' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('foo')
  })

  it('should give default translation of a given key if it does not exist in the given locale', () => {
    const { translationService } = setup()
    const actual = translationService.translate(
      Locale.ES,
      'nonExistingKeyInSpanish' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('baz')
  })

  it('should error if translation is not found neither in the given locale or the default locale', () => {
    const { translationService } = setup()
    expect(() => {
      translationService.translate(Locale.ES, 'nonExistingKey' as keyof TranslationIdentifiers)
    }).toThrowError(
      new TranslationError('Translation for key "nonExistingKey" in locale "1" could not be found')
    )
  })

  it('should return the default locale if the given locale does not exist', () => {
    const { translationService } = setup()
    const NON_EXISTING_LOCALE = 99
    const actual = translationService.translate(
      NON_EXISTING_LOCALE,
      'existingKey' as keyof TranslationIdentifiers
    )

    expect(actual).toEqual('foo')
  })

  it('should translate locale to string', () => {
    const { translationService } = setup()
    const en = translationService.toString(Locale.EN)
    const es = translationService.toString(Locale.ES)
    const defaultLocale = translationService.toString(Locale.DEFAULT)

    expect(en).toEqual('en')
    expect(es).toEqual('es')
    expect(defaultLocale).toEqual('en')
  })

  it('should throw an error if locale is not matched to string', () => {
    const { translationService } = setup()
    expect(() => {
      const NON_EXISTING_LOCALE = 99
      translationService.toString(NON_EXISTING_LOCALE)
    }).toThrowError(new TranslationError('Locale 99 not found'))
  })

  it('should translate string to locale', () => {
    const { translationService } = setup()
    const en = translationService.toLocale('en')
    const es = translationService.toLocale('es')

    expect(en).toEqual(Locale.EN)
    expect(es).toEqual(Locale.ES)
  })

  it('should throw an error if string is not matched to locale', () => {
    const { translationService } = setup()
    expect(() => {
      translationService.toLocale('NON_EXISTING_LOCALE')
    }).toThrowError(
      new TranslationError('String NON_EXISTING_LOCALE could not be mapped to a locale')
    )
  })
})

function setup() {
  const translator = mock(Translator)
  const en = new Map<string, string>([
    ['existingKey', 'foo'],
    ['nonExistingKeyInSpanish', 'baz']
  ])
  const es = new Map<string, string>([['existingKey', 'bar']])

  const translations = new Map<Locale, any>([
    [Locale.ES, es],
    [Locale.EN, en]
  ])

  when(translator.translations).thenReturn(translations)
  when(translator.getDefaultLocaleTranslation()).thenReturn(translations.get(Locale.EN))
  const translationService = new TranslationService(instance(translator))

  return {
    translator,
    translationService
  }
}
