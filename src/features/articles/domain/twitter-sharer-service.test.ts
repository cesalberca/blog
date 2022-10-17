import { TwitterSharerService } from './twitter-sharer-service'
import { EncoderService } from '../../../core/encoder-service'
import { HtmlParserService } from '../../../core/html-parser-service'
import { anything, instance, mock, when } from 'ts-mockito'

describe('TwitterSharerService', () => {
  it('should get the link to share', () => {
    const { encoderService, htmlParserService, twitterSharerService } = setup()
    when(encoderService.encode(anything())).thenReturn('bar')
    when(htmlParserService.parseToPlainText(anything())).thenReturn('baz')

    const actual = twitterSharerService.getShareUrlFromBody({
      body: 'foo',
      url: 'bar',
      message: 'foo',
    })

    expect(actual).toBe('https://twitter.com/intent/tweet?text=bar bar foo @cesalberca')
  })
})

function setup() {
  const encoderService = mock(EncoderService)
  const htmlParserService = mock(HtmlParserService)

  return {
    encoderService,
    htmlParserService,
    twitterSharerService: new TwitterSharerService(instance(encoderService), instance(htmlParserService)),
  }
}
