import { TranslationService } from '../TranslationService'
import { Locale } from '../../infraestructure/language'

describe('TranslationService', () => {
  let translationService: TranslationService

  beforeEach(() => {
    translationService = TranslationService.create()
  })

  it('should translate a given key', () => {
    const actual = translationService.translate(Locale.EN, '_dark')

    expect(actual).toEqual('Dark')
  })
})
