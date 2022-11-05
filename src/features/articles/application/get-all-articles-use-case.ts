import type { UseCase } from '../../../core/use-case/use-case'
import type { Article } from '../domain/article'
import type { ArticlesRepository } from '../domain/articles-repository'
import { Injectable } from '../../../core/dependency-injection/injectable'
import { Inject } from '../../../core/dependency-injection/inject'
import { TYPES } from '../../../core/dependency-injection/types'
import type { Locale } from '../../../core/i18n/locale'
import { ArticlesOrderer } from '../domain/articles-orderer'

type Params = { locale: Locale }

@Injectable()
export class GetAllArticlesUseCase implements UseCase<Article[], Params> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    private readonly articlesOrderer: ArticlesOrderer,
  ) {}

  async execute({ locale }: Params): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(locale)
    return this.articlesOrderer.order(articles)
  }
}
