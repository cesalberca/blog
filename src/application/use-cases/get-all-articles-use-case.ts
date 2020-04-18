import { UseCase } from '../../domain/types/use-case.js'
import { TYPES } from '../../types.js'
import { Locale } from '../../domain/language/locale.js'
import { Article } from '../../domain/articles/article.js'
import { ArticlesRepository } from '../../domain/articles/articles-repository.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { Store } from '../state/store.js'
import { Observable } from '/web_modules/rxjs.js'
import { map, switchMap } from '/web_modules/rxjs/operators.js'

@Injectable()
export class GetAllArticlesUseCase implements UseCase<Article[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STORE) private readonly store: Store
  ) {}

  execute(): Observable<Article[]> {
    return this.store.observable().pipe(
      switchMap(({ locale }) => this.articlesRepository.findAllByLocale(locale)),
      map(articles =>
        articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
      )
    )
  }
}
