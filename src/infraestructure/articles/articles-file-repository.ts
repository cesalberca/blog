import { Datetime } from '../../domain/datetime'
import { ArticleDto } from './article-dto'
import { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { Markdown } from '../../domain/markdown'
import { FileLoader } from '../file-loader'
import { TranslationService } from '../../domain/translation-service'
import { Injectable } from '../../domain/types/injectable'
import { TYPES } from '../../types'
import { Inject } from '../../domain/types/inject'

@Injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  constructor(
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService,
    @Inject(TYPES.FILE_LOADER) private readonly fileLoader: FileLoader
  ) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    let article: ArticleDto

    try {
      article = await import(
        `../../ui/content/articles/${this.translationService.toString(locale)}/${id.value}.md`
      )
    } catch (e) {
      try {
        const locale = this.translationService.toString(Locale.DEFAULT)
        article = await import(`../../ui/content/articles/${locale}/${id.value}.md`)
      } catch (e) {
        const spanishLocale = this.translationService.toString(Locale.ES)
        article = await import(`../../ui/content/articles/${spanishLocale}/${id.value}.md`)
      }
    }

    return Article.create({
      id,
      body: Markdown.fromValue(article.html),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: this.translationService.toLocale(article.attributes.locale),
      image: require(`../../../public/assets/${article.attributes.image}`)
    })
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    const articlesIds = this.fileLoader
      .loadArticles()
      .map(id => id.substr(2, id.length).substr(0, id.length - 5))

    return Promise.all(articlesIds.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
