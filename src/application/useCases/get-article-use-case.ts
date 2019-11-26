import { Command } from '../../domain/command'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/locale'
import { Article } from '../../domain/articles/article'
import { ArticlesRepository } from '../../domain/articles/articles-repository'
import { Id } from '../../domain/id'
import { Injectable } from '../../injectable'
import { Inject } from '../../inject'

@Injectable()
export class GetArticleUseCase implements Command<Article, { id: Id; locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository
  ) {}

  async execute({ id, locale }: { id: Id; locale: Locale }): Promise<Article> {
    return this.articlesRepository.findOneByLocale(id, locale)
  }
}
