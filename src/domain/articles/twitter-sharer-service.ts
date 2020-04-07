import { EncoderService } from '../encoder-service.js'
import { HtmlParserService } from '../html-parser-service.js'
import { TranslationService } from '../translation-service.js'
import { Locale } from '../language/locale.js'
import { Injectable } from '../types/injectable.js'
import { Inject } from '../types/inject.js'
import { TYPES } from '../../types.js'

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
