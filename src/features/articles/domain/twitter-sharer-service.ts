import { EncoderService } from '../../../core/encoder-service'
import { HtmlParserService } from '../../../core/html-parser-service'
import { Injectable } from '../../../core/dependency-injection/injectable'
import type { Url } from '../../../core/types/url'

@Injectable()
export class TwitterSharerService {
  private static readonly USER_HANDLER = `@cesalberca`

  constructor(
    private readonly encoderService: EncoderService,
    private readonly htmlParserService: HtmlParserService,
  ) {}

  getShareUrlFromBody(options: { body: string; url: Url; message: string }): string {
    return `https://twitter.com/intent/tweet?text=${this.encoderService.encode(
      this.htmlParserService.parseToPlainText(options.body),
    )}\n${options.url.value} ${options.message} ${TwitterSharerService.USER_HANDLER}`
  }
}
