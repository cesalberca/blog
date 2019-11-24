import { EncoderService } from './EncoderService'
import { HtmlParserService } from './HtmlParserService'
import { TranslationService } from './TranslationService'
import { injectable } from 'inversify'
import { Locale } from './language/Locale'

@injectable()
export class TwitterSharerService {
  private static readonly USER_HANDLER = `@cesalberca`

  constructor(
    private readonly encoderService: EncoderService,
    private readonly htmlParserService: HtmlParserService,
    private readonly translationService: TranslationService
  ) {}

  getShareUrlFromBody(options: { body: string; url: string; locale: Locale }): string {
    return `https://twitter.com/intent/tweet?text=${this.encoderService.encode(
      this.htmlParserService.parseToPlainText(options.body)
    )} ${options.url} ${this.translationService.translate(options.locale, 'article_via')} ${
      TwitterSharerService.USER_HANDLER
    }`
  }
}
