import { Id } from '../Id'
import { Markdown } from '../Markdown'

export class Article {
  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly date: Date,
    public readonly body: Markdown
  ) {}

  public static create(article: { id: Id; title: string; date: Date; body: Markdown }) {
    return new Article(article.id, article.title, article.date, article.body)
  }

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
