import { Command } from '../../domain/types/command.js'
import { TYPES } from '../../types.js'
import { Locale } from '../../domain/language/locale.js'
import { Article } from '../../domain/articles/article.js'
import { ArticlesRepository } from '../../domain/articles/articles-repository.js'
import { Id } from '../../domain/id.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { Store } from '../state/store.js'

@Injectable()
export class GetArticleUseCase implements Command<Article, { id: Id; locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STORE) private readonly store: Store
  ) {}

  async execute({ id }: { id: Id }): Promise<Article> {
    const { locale } = this.store.value()
    return this.articlesRepository.findOneByLocale(id, locale)
  }
}
