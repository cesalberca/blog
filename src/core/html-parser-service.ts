import { Injectable } from './dependency-injection/injectable'

@Injectable()
export class HtmlParserService {
  parseToPlainText(html: string): string {
    return html.replace(/<[^>]*>/g, '')
  }
}
