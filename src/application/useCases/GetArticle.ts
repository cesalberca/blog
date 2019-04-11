import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'
import { Locale } from '../../infraestructure/language'
import { CommandType } from '../../infraestructure/types/CommandType'

export type GetArticleType = CommandType<GetArticle>

export class GetArticle implements Command<Article> {
  public constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly id: Id,
    private readonly locale: Locale
  ) {}

  public async execute(): Promise<Article> {
    return this.articlesRepository.findOneByLocale(this.id, this.locale)
  }
}
