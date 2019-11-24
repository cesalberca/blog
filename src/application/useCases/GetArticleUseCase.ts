import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale } from '../../domain/language'
import { UseCaseDecorator } from './UseCaseDecorator'
import { Injectable } from '../../Injectable'

@Injectable()
export class GetArticleUseCase implements Command<Article, { id: Id; locale: Locale }> {
  constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly useCaseDecorator: UseCaseDecorator
  ) {
    return this.useCaseDecorator.decorate(this)
  }

  async execute({ id, locale }: { id: Id; locale: Locale }): Promise<Article> {
    return this.articlesRepository.findOneByLocale(id, locale)
  }
}
