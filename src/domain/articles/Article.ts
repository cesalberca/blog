import { Id } from '../Id'
import { Markdown } from '../Markdown'
import { Datetime } from '../../infraestructure/Datetime'
import { Locale } from '../language'
import { Length } from '../Length'
import { Image } from '../../infraestructure/Image'

export class Article {
  private static readonly SUMMARY_SEPARATOR = '<!-- more -->'
  private static readonly AVERAGE_WORDS_PER_MINUTE = 180

  public constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly date: Datetime,
    public readonly body: Markdown,
    public readonly locale: Locale,
    public readonly image: Image
  ) {}

  public static create(article: {
    id: Id
    title: string
    date: Datetime
    body: Markdown
    locale: Locale
    image: Image
  }) {
    return new Article(
      article.id,
      article.title,
      article.date,
      article.body,
      article.locale,
      article.image
    )
  }

  public getExcerpt() {
    return {
      id: this.id,
      title: this.title,
      date: this.getFormattedDate(),
      body: this.getSummary(),
      locale: this.locale,
      readingTime: this.getReadingTime(),
      image: this.image
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

  private getFormattedDate(locale: string | undefined = undefined) {
    return this.date.format(locale)
  }
}
