import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Locale } from '../../infraestructure/language'
import { CommandType } from '../../infraestructure/types/CommandType'

export type GetAllArticlesType = CommandType<GetAllArticles>

export class GetAllArticles implements Command<Article[]> {
  public constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Article[]> {
    return this.articlesRepository.findAllByLocale(this.locale)
  }
}
