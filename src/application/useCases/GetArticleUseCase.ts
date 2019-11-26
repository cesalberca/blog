import { Command } from '../../domain/Command'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/Locale'
import { Article } from '../../domain/articles/Article'
import { ArticlesRepository } from '../../domain/articles/ArticlesRepository'
import { Id } from '../../domain/Id'
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
