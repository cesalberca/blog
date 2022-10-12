import type { UseCase } from '../../domain/types/use-case'
import type { Locale } from '../../domain/language/locale'
import type { Article } from '../../domain/articles/article'
import type { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { Store } from '../state/store'
import type { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { TYPES } from '../../../../types'

@Injectable()
export class GetAllArticlesUseCase implements UseCase<Article[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    private readonly store: Store,
  ) {}

  execute(): Observable<Article[]> {
    return this.store.observable().pipe(
      switchMap(({ locale }) => this.articlesRepository.findAllByLocale(locale)),
      map(articles => articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))),
    )
  }
}
