import type { UseCase } from '../../domain/types/use-case'
import type { Locale } from '../../domain/language/locale'
import type { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import type { Id } from '../../domain/id'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { Store } from '../state/store'
import type { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { TYPES } from '../../../../types'

@Injectable()
export class GetArticleUseCase implements UseCase<Article, { id: Id; locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    private readonly store: Store,
  ) {}

  execute({ id }: { id: Id }): Observable<Article> {
    return this.store.observable().pipe(switchMap(({ locale }) => this.articlesRepository.findOneByLocale(id, locale)))
  }
}
