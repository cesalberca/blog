import { Id } from '../Id'
import { Markdown } from '../Markdown'
import { Datetime } from '../../infraestructure/Datetime'

export class Article {
  private static readonly EXCERPT_MAX_CHARACTERS = 500

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
      body: this.body.toHtml().substr(0, Article.EXCERPT_MAX_CHARACTERS)
    }
  }

  private getFormattedDate() {
    return this.date.format()
  }
}
