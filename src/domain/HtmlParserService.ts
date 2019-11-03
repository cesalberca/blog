export class HtmlParserService {
  parseToPlainText(html: string): string {
    const document = new DOMParser().parseFromString(html, 'text/html')
    return document.body.textContent || ''
  }

  static create() {
    return new HtmlParserService()
  }
}
