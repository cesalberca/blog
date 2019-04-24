import { Id } from '../Id'
import { Markdown } from '../Markdown'
import { Datetime } from '../../infraestructure/Datetime'
import { Locale } from '../language'

export class Article {
  private static readonly SUMMARY_SEPARATOR = '<!--more-->'

  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly date: Datetime,
    public readonly body: Markdown,
    public readonly locale: Locale
  ) {}

  public static create(article: {
    id: Id
    title: string
    date: Datetime
    body: Markdown
    locale: Locale
  }) {
    return new Article(article.id, article.title, article.date, article.body, article.locale)
  }

  public getExcerpt() {
    return {
      id: this.id,
      title: this.title,
      date: this.getFormattedDate(),
      body: this.getSummary(this.body.toHtml()),
      locale: this.locale
    }
  }

  private getFormattedDate() {
    return this.date.format()
  }

  private getSummary(body: string) {
    return body.split(Article.SUMMARY_SEPARATOR)[0]
  }
}
