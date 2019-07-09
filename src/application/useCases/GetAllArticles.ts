import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Locale } from '../../domain/language'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetAllArticles implements Command<Article[]> {
  public constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(this.locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }

  public static create(context: { locale: Locale }) {
    return UseCaseDecorator.create().decorate(
      new GetAllArticles(ArticlesFileRepository.create(), context.locale)
    )
  }
}
