import { Article, ArticlesRepository, Id, Markdown } from '../../domain/articles'
import { Locale } from '../language'
import { Datetime } from '../Datetime'

export class ArticlesFileRepository implements ArticlesRepository {
  public async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const article = await import(`./../../domain/articles/${locale}/${id.value}.md`)

    return Article.create({
      id,
      body: Markdown.fromValue(article.body),
      date: Datetime.fromValue(article.attributes.date),
      title: article.attributes.title
    })
  }

  public async findAllByLocale(locale: Locale): Promise<Article[]> {
    const articlesIds = ['haciendo-vuen-frontend']

    const articles = await Promise.all(
      articlesIds.map(article => import(`./../../domain/articles/${locale}/${article}.md`))
    )

    return articles.map(article => {
      return Article.create({
        id: Id.fromValue(article),
        body: Markdown.fromValue(article.body),
        date: Datetime.fromNow(),
        title: article.attributes.title
      })
    })
  }
}
