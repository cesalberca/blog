import { Command } from '../../domain/types/command.js'
import { TYPES } from '../../types.js'
import { Locale } from '../../domain/language/locale.js'
import { Article } from '../../domain/articles/article.js'
import { ArticlesRepository } from '../../domain/articles/articles-repository.js'
import { Injectable } from '../../domain/types/injectable.js'
import { Inject } from '../../domain/types/inject.js'
import { State } from '../state/state.js'

@Injectable()
export class GetAllArticlesUseCase implements Command<Article[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository,
    @Inject(TYPES.STATE) private readonly state: State
  ) {}

  async execute(): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(this.state.value().locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }
}
