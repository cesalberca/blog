import { UseCase } from './UseCase'
import { GetAllArticles, GetArticle, GetTalksGiven } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { Command } from '../../infraestructure/Command'
import { FileLoader } from '../../infraestructure/FileLoader'

export class UseCaseFactory {
  public static get<T>(useCase: UseCase, context?: any) {
    switch (useCase) {
      case 'GetAllArticles':
        return (new GetAllArticles(
          new ArticlesFileRepository(new FileLoader()),
          context.locale
        ) as unknown) as Command<T>
      case 'GetTalksGiven':
        return (new GetTalksGiven() as unknown) as Command<T>
      case 'GetArticle':
        return (new GetArticle(
          new ArticlesFileRepository(new FileLoader()),
          context.id,
          context.locale
        ) as unknown) as Command<T>
      default:
        throw new Error(`Use case "${useCase}" not found`)
    }
  }
}
