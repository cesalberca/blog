import type { UseCase } from '../../../core/use-case/use-case'
import type { Article } from '../domain/articles/article'
import type { ArticlesRepository } from '../domain/articles/articles-repository'
import { Injectable } from '../../../core/dependency-injection/injectable'
import { Inject } from '../../../core/dependency-injection/inject'
import { TYPES } from '../../../types'
import type { Locale } from '../../../core/i18n/locale'

type Params = { locale: Locale }

@Injectable()
export class GetAllArticlesUseCase implements UseCase<Article[], Params> {
  constructor(@Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository) {}

  async execute({ locale }: Params): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }
}