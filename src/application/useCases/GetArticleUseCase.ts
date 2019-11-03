import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale } from '../../domain/language'
import { UseCaseDecorator } from './UseCaseDecorator'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'

export class GetArticleUseCase implements Command<Article> {
  constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly id: Id,
    private readonly locale: Locale
  ) {}

  async execute(): Promise<Article> {
    return this.articlesRepository.findOneByLocale(this.id, this.locale)
  }

  static create(context: { id: Id; locale: Locale }) {
    return UseCaseDecorator.create().decorate(
      new GetArticleUseCase(ArticlesFileRepository.create(), context.id, context.locale)
    )
  }
}
