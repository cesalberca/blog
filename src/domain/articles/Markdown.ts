export class Markdown {
  public constructor(private readonly contents: string) {}

  public toHtml() {
    return this.contents.toString()
  }
}
