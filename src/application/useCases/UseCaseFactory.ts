import { UseCase } from './UseCase'
import { GetArticle, GetAllArticles, GetRecentArticles, GetTalksGiven } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { Command } from '../../infraestructure/Command'

export class UseCaseFactory {
  public static get<T>(useCase: UseCase, context?: any) {
    switch (useCase) {
      case 'GetArticles':
        return (new GetAllArticles(
          new ArticlesFileRepository(),
          context.locale
        ) as unknown) as Command<T>
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
