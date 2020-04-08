import { Datetime } from '../../domain/datetime.js'
import { ArticleDto } from './article-dto.js'
import { Locale } from '../../domain/language/locale.js'
import { Article } from '../../domain/articles/article.js'
import { ArticlesRepository } from '../../domain/articles/articles-repository.js'
import { Id } from '../../domain/id.js'
import { Markdown } from '../../domain/markdown.js'
import { TranslationService } from '../../domain/translation-service.js'
import { Injectable } from '../../domain/types/injectable.js'
import { TYPES } from '../../types.js'
import { Inject } from '../../domain/types/inject.js'
import { articles } from './articles.js'
import frontMatter from '/web_modules/front-matter.js'

@Injectable()
export class ArticlesFileRepository implements ArticlesRepository {
  constructor(
    @Inject(TYPES.TRANSLATION_SERVICE) private readonly translationService: TranslationService
  ) {}

  async findOneByLocale(id: Id, locale: Locale): Promise<Article> {
    let article: ArticleDto

    try {
      const url = `src/infrastructure/articles/${this.translationService.toString(locale)}/${
        id.value
      }.md`
      article = frontMatter(
        await fetch(`${url}`)
          .then(x => x.blob())
          .then(x => x.text())
      )
    } catch (e) {
      try {
        const locale = this.translationService.toString(Locale.DEFAULT)
        article = await import(`./${locale}/${id.value}.md`)
      } catch (e) {
        const spanishLocale = this.translationService.toString(Locale.ES)
        article = await import(`./${spanishLocale}/${id.value}.md`)
      }
    }

    return Article.create({
      id,
      body: Markdown.fromValue(article.body),
      date: Datetime.fromString(article.attributes.date),
      title: article.attributes.title,
      locale: this.translationService.toLocale(article.attributes.locale),
      image: `src/ui/images/${article.attributes.image}`
    })
  }

  async findAllByLocale(locale: Locale): Promise<Article[]> {
    return Promise.all(articles.map(id => this.findOneByLocale(Id.fromValue(id), locale)))
  }
}
