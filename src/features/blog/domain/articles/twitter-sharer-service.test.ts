import { TwitterSharerService } from './twitter-sharer-service'
import { EncoderService } from '../encoder-service'
import { HtmlParserService } from '../html-parser-service'
import { TranslationService } from '../translation-service'
import { anything, instance, mock, when } from 'ts-mockito'
import { Locale } from '../language/locale'

describe('TwitterSharerService', () => {
  it('should get the link to share', () => {
    const { translationService, encoderService, htmlParserService, twitterSharerService } = setup()
    when(translationService.translate(anything(), anything())).thenReturn('foo')
    when(encoderService.encode(anything())).thenReturn('bar')
    when(htmlParserService.parseToPlainText(anything())).thenReturn('baz')

    const actual = twitterSharerService.getShareUrlFromBody({
      body: 'foo',
      url: 'bar',
      locale: Locale.EN,
    })

    expect(actual).toBe('https://twitter.com/intent/tweet?text=bar bar foo @cesalberca')
  })
})

function setup() {
  const encoderService = mock(EncoderService)
  const htmlParserService = mock(HtmlParserService)
  const translationService = mock(TranslationService)

  return {
    encoderService,
    htmlParserService,
    translationService,
    twitterSharerService: new TwitterSharerService(
      instance(encoderService),
      instance(htmlParserService),
      instance(translationService),
    ),
  }
}
