import { UseCase } from '../../domain/types/use-case.js'
import { TYPES } from '../../types.js'
import { Locale } from '../../domain/language/locale.js'
import { Article } from '../../domain/articles/article.js'
import { ArticlesRepository } from '../../domain/articles/articles-repository.js'
import { Id } from '../../domain/id.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { Store } from '../state/store.js'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable()
export class GetArticleUseCase implements UseCase<Article, { id: Id; locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STORE) private readonly store: Store
  ) {}

  execute({ id }: { id: Id }): Observable<Article> {
    return this.store
      .observable()
      .pipe(switchMap(({ locale }) => this.articlesRepository.findOneByLocale(id, locale)))
  }
}
