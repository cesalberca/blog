export class HtmlParserService {
  private constructor() {}

  public parseToPlainText(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  }

  public static create() {
    return new HtmlParserService()
  }
}
