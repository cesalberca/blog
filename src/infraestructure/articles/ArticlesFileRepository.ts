import { Datetime } from '../../domain/Datetime'
import { ArticleDto } from './ArticleDto'
import { injectable } from 'inversify'
import { Locale } from '../../domain/language/Locale'
import { Article } from '../../domain/articles/Article'
import { ArticlesRepository } from '../../domain/articles/ArticlesRepository'
import { Id } from '../../domain/Id'
import { Markdown } from '../../domain/Markdown'
import { FileLoader } from '../FileLoader'
import { TranslationService } from '../../domain/TranslationService'
import { Translator } from '../../domain/language/Translator'

@injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  private translationService = new TranslationService(new Translator())

  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    let article: ArticleDto

    try {
      article = await import(
        `./../../domain/articles/${this.translationService.toString(locale)}/${id.value}.md`
      )
    } catch (e) {
      try {
        const locale = this.translationService.toString(Locale.DEFAULT)
        article = await import(`./../../domain/articles/${locale}/${id.value}.md`)
      } catch (e) {
        const spanishLocale = this.translationService.toString(Locale.ES)
        article = await import(`./../../domain/articles/${spanishLocale}/${id.value}.md`)
      }
    }

    return Article.create({
      id,
      body: Markdown.fromValue(article.html),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: this.translationService.toLocale(article.attributes.locale),
      image: require(`./../../domain/articles/assets/${article.attributes.image}`)
    })
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    const articlesIds = new FileLoader()
      .loadArticles()
      .map(id => id.substr(2, id.length).substr(0, id.length - 5))

    return Promise.all(articlesIds.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
