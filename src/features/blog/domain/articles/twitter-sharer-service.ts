import { EncoderService } from '../encoder-service'
import { HtmlParserService } from '../html-parser-service'
import { Injectable } from '../types/injectable'

@Injectable()
export class TwitterSharerService {
  private static readonly USER_HANDLER = `@cesalberca`

  constructor(private readonly encoderService: EncoderService, private readonly htmlParserService: HtmlParserService) {}

  getShareUrlFromBody(options: { body: string; url: string; message: string }): string {
    return `https://twitter.com/intent/tweet?text=${this.encoderService.encode(
      this.htmlParserService.parseToPlainText(options.body),
    )} ${options.url} ${options.message} ${TwitterSharerService.USER_HANDLER}`
  }
}
