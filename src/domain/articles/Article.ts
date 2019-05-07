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
      body: this.getSummary(),
      locale: this.locale,
      readingTime: this.getReadingTime()
    }
  }

  public getReadingTime(): Length {
    const words = this.body.value.split(' ').length
    const readingTime = words / Article.AVERAGE_WORDS_PER_MINUTE
    return readingTime > 1 ? Length.fromMinutes(Math.round(readingTime)) : Length.fromMinutes(1)
  }

  public getSummary() {
    return this.body.toHtml().split(Article.SUMMARY_SEPARATOR)[0]
  }

  private getFormattedDate() {
    return this.date.format()
  }
}
