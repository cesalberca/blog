import type { UseCase } from '../../../core/use-case/use-case'
import type { Article } from '../domain/article'
import type { ArticlesRepository } from '../domain/articles-repository'
import type { Id } from '../../../core/id'
import { Injectable } from '../../../core/dependency-injection/injectable'
import { Inject } from '../../../core/dependency-injection/inject'
import { TYPES } from '../../../types'
import type { Locale } from '../../../core/i18n/locale'

@Injectable()
export class GetArticleUseCase implements UseCase<Article, { id: Id; locale: Locale }> {
  constructor(@Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository) {}

  execute({ id, locale }: { id: Id; locale: Locale }): Promise<Article> {
    return this.articlesRepository.findOneByLocale(id, locale)
  }
}
