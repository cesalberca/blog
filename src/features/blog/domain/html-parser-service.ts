import { Injectable } from './types/injectable'

@Injectable()
export class HtmlParserService {
  parseToPlainText(html: string): string {
    return html
  }
}
