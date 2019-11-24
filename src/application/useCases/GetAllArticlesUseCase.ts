import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Locale } from '../../domain/language'
import { UseCaseDecorator } from './UseCaseDecorator'
import { Injectable } from '../../Injectable'
import { Inject } from '../../Inject'
import { ARTICLES_REPOSITORY_TYPE } from '../../types'

@Injectable()
export class GetAllArticlesUseCase implements Command<Article[], { locale: Locale }> {
  constructor(
    @Inject(ARTICLES_REPOSITORY_TYPE) private readonly articlesRepository: ArticlesRepository,
    private readonly useCaseDecorator: UseCaseDecorator
  ) {
    return this.useCaseDecorator.decorate(this)
  }

  async execute({ locale }: { locale: Locale }): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }
}
