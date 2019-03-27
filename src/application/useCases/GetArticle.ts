import { Command } from '../../infraestructure/Command'
import { Article, ArticlesRepository } from '../../domain/articles'
import { Id } from '../../domain'

export class GetArticle implements Command<Article> {
  public constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly id: Id
  ) {}

  public async execute(): Promise<Article> {
    return this.articlesRepository.findOne(this.id)
  }
}
