export class HtmlParserService {
  public parseToPlainText(html: string): string {
    const document = new DOMParser().parseFromString(html, 'text/html')
    return document.body.textContent || ''
  }

  public static create() {
    return new HtmlParserService()
  }
}
