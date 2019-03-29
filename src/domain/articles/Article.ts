import { Id } from '../Id'
import { Markdown } from '../Markdown'
import { Datetime } from '../../infraestructure/Datetime'

export class Article {
  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly date: Datetime,
    public readonly body: Markdown
  ) {}

  public static create(article: { id: Id; title: string; date: Datetime; body: Markdown }) {
    return new Article(article.id, article.title, article.date, article.body)
  }

  public getExcerpt() {
    return {
      id: this.id,
      title: this.title,
      date: this.getFormattedDate(),
      body: this.getSummary(this.body.toHtml())
    }
  }

  private getFormattedDate() {
    return this.date.format()
  }

  private getSummary(body: string) {
    return body.split('<!--more-->')[0]
  }
}
