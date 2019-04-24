import { Id } from '../Id'
import { Markdown } from '../Markdown'
import { Datetime } from '../../infraestructure/Datetime'
import { Locale } from '../language'
import { Length } from '../Length'

export class Article {
  private static readonly SUMMARY_SEPARATOR = '<!--more-->'
  private static readonly AVERAGE_WORDS_PER_MINUTE = 180

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
      locale: this.locale,
      readingTime: this.getReadingTime()
    }
  }

  private getFormattedDate() {
    return this.date.format()
  }

  public getReadingTime(): Length {
    const words = this.body.value.split(' ').length
    return Length.fromMinutes(Math.round(words / Article.AVERAGE_WORDS_PER_MINUTE))
  }

  private getSummary(body: string) {
    return body.split(Article.SUMMARY_SEPARATOR)[0]
  }
}
