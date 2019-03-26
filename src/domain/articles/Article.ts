import { Id } from './Id'
import { Markdown } from './Markdown'

export class Article {
  public constructor(
    private readonly id: Id,
    private readonly title: string,
    private readonly date: Date,
    private readonly body: Markdown
  ) {}

  public getExcerpt() {
    return {
      id: this.id,
      title: this.title,
      date: this.getFormattedDate(),
      body: this.body.toHtml()
    }
  }

  private getFormattedDate() {
    return this.date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
}
