import { EncoderService } from '../encoder-service'
import { HtmlParserService } from '../html-parser-service'
import { TranslationService } from '../translation-service'
import type { Locale } from '../language/locale'
import { Injectable } from '../types/injectable'

@Injectable()
export class TwitterSharerService {
  private static readonly USER_HANDLER = `@cesalberca`

  constructor(
    private readonly encoderService: EncoderService,
    private readonly htmlParserService: HtmlParserService,
    private readonly translationService: TranslationService,
  ) {}

  getShareUrlFromBody(options: { body: string; url: string; locale: Locale }): string {
    return `https://twitter.com/intent/tweet?text=${this.encoderService.encode(
      this.htmlParserService.parseToPlainText(options.body),
    )} ${options.url} ${this.translationService.translate(options.locale, 'article_via')} ${
      TwitterSharerService.USER_HANDLER
    }`
  }
}
