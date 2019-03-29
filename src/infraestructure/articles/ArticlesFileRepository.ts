import { Article, ArticlesRepository, Id, Markdown } from '../../domain/articles'
import { Locale } from '../language'
import { Datetime } from '../Datetime'
import { FileLoader } from '../FileLoader'

export class ArticlesFileRepository implements ArticlesRepository {
  public constructor(private readonly fileLoader: FileLoader) {}

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
    const articlesIds = this.fileLoader
      .loadArticles()
      .map((id: string) => id.substr(2, id.length).substr(0, id.length - 5))

    const articles = await Promise.all(
      articlesIds.map(id => import(`./../../domain/articles/${locale}/${id}.md`))
    )

    const articlesMap = new Map<
      string,
      { attributes: Record<string, string>; body: string; html: string }
    >()
    articles.forEach((article, index) => {
      articlesMap.set(articlesIds[index], article)
    })

    return Array.from(articlesMap.entries(), ([id, article]) => {
      return Article.create({
        id: Id.fromValue(id),
        body: Markdown.fromValue(article.body),
        date: Datetime.fromNow(),
        title: article.attributes.title
      })
    })
  }
}
