import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Locale } from '../../domain/language'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { UseCaseDecorator } from './UseCaseDecorator'

export class GetAllArticlesUseCase implements Command<Article[]> {
  constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly locale: Locale
  ) {}

  async execute(): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(this.locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }

  static create(context: { locale: Locale }) {
    return UseCaseDecorator.create().decorate(
      new GetAllArticlesUseCase(ArticlesFileRepository.create(), context.locale)
    )
  }
}
