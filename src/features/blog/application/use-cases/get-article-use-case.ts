import type { UseCase } from '../../domain/types/use-case'
import type { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import type { Id } from '../../domain/id'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { TYPES } from '../../../../types'
import type { Locale } from '../../../../core/i18n/locale'

@Injectable()
export class GetArticleUseCase implements UseCase<Article, { id: Id; locale: Locale }> {
  constructor(@Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository) {}

  execute({ id, locale }: { id: Id; locale: Locale }): Promise<Article> {
    return this.articlesRepository.findOneByLocale(id, locale)
  }
}
