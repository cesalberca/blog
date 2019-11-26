import { Injectable } from '../injectable'

@Injectable()
export class HtmlParserService {
  parseToPlainText(html: string): string {
    const document = new DOMParser().parseFromString(html, 'text/html')
    return document.body.textContent || ''
  }
}