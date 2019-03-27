import { Article, ArticlesRepository, Id, Markdown } from '../../domain/articles'
import { Locale } from '../language'

export class ArticlesFileRepository implements ArticlesRepository {
  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const contents = await import(`./../../domain/articles/${locale}/${id.value}.md`)

    const body = contents.default

    return Article.create({
      id,
      body: Markdown.fromValue(body),
      date: new Date(),
      title: 'foo'
    })
  }
}
