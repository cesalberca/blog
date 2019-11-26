import { Command } from '../../domain/Command'
import { TYPES } from '../../types'
import { Locale } from '../../domain/language/Locale'
import { Article } from '../../domain/articles/Article'
import { ArticlesRepository } from '../../domain/articles/ArticlesRepository'
import { Injectable } from '../../injectable'
import { Inject } from '../../inject'

@Injectable()
export class GetAllArticlesUseCase implements Command<Article[], { locale: Locale }> {
  constructor(
    @Inject(TYPES.ARTICLES_REPOSITORY) private readonly articlesRepository: ArticlesRepository
  ) {}

  async execute({ locale }: { locale: Locale }): Promise<Article[]> {
    const articles = await this.articlesRepository.findAllByLocale(locale)
    return articles.slice().sort((articleA, articleB) => (articleB.date < articleA.date ? -1 : 1))
  }
}
