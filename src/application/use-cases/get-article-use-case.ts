import { Command } from '../../domain/command'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { Injectable } from '../../injectable'
import { Inject } from '../../inject'
import { StateManager } from '../state/state-manager'

@Injectable()
export class GetArticleUseCase implements Command<Article, { id: Id; locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager
  ) {}

  async execute({ id }: { id: Id }): Promise<Article> {
    return this.articlesRepository.findOneByLocale(id, this.stateManager.state.locale)
  }
}
