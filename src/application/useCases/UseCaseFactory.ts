import { UseCase } from './UseCase'
import { GetArticle, GetArticles, GetRecentArticles, GetTalksGiven } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { Command } from '../../infraestructure/Command'

export class UseCaseFactory {
  public static get<T>(useCase: UseCase, context?: any): Command<T> {
    switch (useCase) {
      case 'GetArticles':
        return (new GetArticles() as unknown) as Command<T>
      case 'GetRecentArticles':
        return (new GetRecentArticles() as unknown) as Command<T>
      case 'GetTalksGiven':
        return (new GetTalksGiven() as unknown) as Command<T>
      case 'GetArticle':
        return (new GetArticle(
          new ArticlesFileRepository(),
          context.id,
          context.locale
        ) as unknown) as Command<T>
      default:
        throw new Error(`Use case "${useCase}" not found`)
    }
  }
}
