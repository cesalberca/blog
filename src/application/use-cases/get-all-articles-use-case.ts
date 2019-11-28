import { Command } from '../../domain/types/command'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Injectable } from '../../domain/types/injectable'
import { Inject } from '../../domain/types/inject'
import { StateManager } from '../state/state-manager'

@Injectable()
export class GetAllArticlesUseCase implements Command<Article[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager
  ) {}

  async execute(): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(this.stateManager.state.locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }
}
