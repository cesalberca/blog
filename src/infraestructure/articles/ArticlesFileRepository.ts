import { Article, ArticlesRepository, Id, Markdown } from '../../domain/articles'

export class ArticlesFileRepository implements ArticlesRepository {
  async findOne(id: Id): Promise<Article> {
    const contents = await import(`./../../domain/articles/en/test-article.md`)

    const body = contents.default

    return Article.create({
      id,
      body: Markdown.fromValue(body),
      date: new Date(),
      title: 'foo'
    })
  }
}
