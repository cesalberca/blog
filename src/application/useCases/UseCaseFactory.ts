import { UseCase } from './UseCase'
import { GetAllArticles, GetArticle, GetTalksGiven } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../TranslationService'
import { Translator } from '../../infraestructure/language'

export class UseCaseFactory {
  public static get<T extends UseCase>(useCase: T, context?: any) {
    switch (useCase) {
      case UseCase.GET_ALL_ARTICLES:
        return new GetAllArticles(
          new ArticlesFileRepository(
            FileLoader.create(),
            TranslationService.create(Translator.create())
          ),
          context.locale
        )
      case UseCase.GET_TALKS_GIVEN:
        return new GetTalksGiven()
      case UseCase.GET_ARTICLE:
        return new GetArticle(
          new ArticlesFileRepository(
            FileLoader.create(),
            TranslationService.create(Translator.create())
          ),
          context.id,
          context.locale
        )
      default:
        throw new Error(`Use case "${useCase}" not found`)
    }
  }
}
