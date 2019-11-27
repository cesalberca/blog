import { EncoderService } from './encoder-service'
import { HtmlParserService } from './html-parser-service'
import { TranslationService } from './translation-service'
import { Locale } from './language/locale'
import { Injectable } from '../injectable'
import { Inject } from '../inject'
import { TYPES } from '../types'

@Injectable()
export class TwitterSharerService {
  private static readonly USER_HANDLER = `@cesalberca`

  constructor(
    @Inject(TYPES.ENCODER_SERVICE) private readonly encoderService: EncoderService,
    @Inject(TYPES.HTML_PARSER_SERVICE) private readonly htmlParserService: HtmlParserService,
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService
  ) {}

  getShareUrlFromBody(options: { body: string; url: string; locale: Locale }): string {
    return `https://twitter.com/intent/tweet?text=${this.encoderService.encode(
      this.htmlParserService.parseToPlainText(options.body)
    )} ${options.url} ${this.translationService.translate(options.locale, 'article_via')} ${
      TwitterSharerService.USER_HANDLER
    }`
  }
}
