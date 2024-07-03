import { Id } from '../../../core/id'
import { Markdown } from '../../../core/markdown'
import { Datetime } from '../../../core/datetime'
import { Length } from '../../../core/length'
import type { Image } from '../../../core/image'
import type { Locale } from '../../../core/i18n/locale'

export class Article {
  private static readonly SUMMARY_SEPARATOR = '<!-- more -->'
  private static readonly AVERAGE_WORDS_PER_MINUTE = 180

  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly date: Datetime,
    public readonly body: Markdown,
    public readonly locale: Locale,
    public readonly image: Image,
  ) {}

  static create(article: { id: Id; title: string; date: Datetime; body: Markdown; locale: Locale; image: Image }) {
    return new Article(article.id, article.title, article.date, article.body, article.locale, article.image)
  }

  getExcerpt() {
    return {
      id: this.id,
      title: this.title,
      date: this.getFormattedDate(),
      body: this.getSummary(),
      locale: this.locale,
      readingTime: this.getReadingTime(),
      image: this.image,
    }
  }

  getReadingTime(): Length {
    const words = this.body.value.split(' ').length
    const readingTime = words / Article.AVERAGE_WORDS_PER_MINUTE
    return readingTime > 1 ? Length.fromMinutes(Math.round(readingTime)) : Length.fromMinutes(1)
  }

  getSummary() {
    return this.body.value.split(Article.SUMMARY_SEPARATOR)[0]
  }

  getFormattedDate(locale: Locale | undefined = undefined) {
    return this.date.format(locale)
  }

  toJson() {
    return {
      id: this.id.value,
      title: this.title,
      date: this.date.toIso(),
      body: this.body.value,
      locale: this.locale,
      image: this.image,
    }
  }

  static fromJson(json: ReturnType<Article['toJson']>) {
    return Article.create({
      id: Id.fromValue(json.id),
      body: Markdown.fromValue(json.body),
      date: Datetime.fromIso(json.date),
      title: json.title,
      locale: json.locale,
      image: json.image,
    })
  }
}
