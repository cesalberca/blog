import { Injectable } from '../../../core/dependency-injection/injectable'

@Injectable()
export class HtmlParserService {
  parseToPlainText(html: string): string {
    return html
  }
}
