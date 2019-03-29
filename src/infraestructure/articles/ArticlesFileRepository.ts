import { Article, ArticlesRepository, Id, Markdown } from '../../domain/articles'
import { Locale } from '../language'
import { Datetime } from '../Datetime'

export class ArticlesFileRepository implements ArticlesRepository {
  public async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    const contents = await import(`./../../domain/articles/${locale}/${id.value}.md`)

    const body = contents.default

    return Article.create({
      id,
      body: Markdown.fromValue(body),
      date: Datetime.fromNow(),
      title: 'foo'
    })
  }

  public async findAllByLocale(locale: Locale): Promise<Article[]> {
    const articles = ['haciendo-vuen-frontend']

    const bodies = await Promise.all(
      articles.map(article => import(`./../../domain/articles/${locale}/${article}.md`))
    )

    return bodies.map(body => {
      return Article.create({
        id: Id.fromValue('foo'),
        body: Markdown.fromValue(body.default),
        date: Datetime.fromNow(),
        title: 'foo'
      })
    })
  }
}
