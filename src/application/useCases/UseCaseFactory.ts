import { UseCase } from './UseCase'
import { GetAllArticles, GetArticle, GetTalksGiven } from './index'
import { ArticlesFileRepository } from '../../infraestructure/articles/ArticlesFileRepository'
import { FileLoader } from '../../infraestructure/FileLoader'
import { TranslationService } from '../TranslationService'
import { Translator } from '../../infraestructure/language'
import { TalksFileRepository } from '../../infraestructure/talks/TalksFileRepository'
import { LoggerCommandDecorator } from '../../infraestructure/LoggerCommandDecorator'
import { Logger } from '../../infraestructure/Logger'

export class UseCaseFactory {
  private static readonly logger = Logger.create({
    // eslint-disable-next-line
    stdout: { error: console.error, info: console.log, warn: console.warn }
  })

  public static get<T extends UseCase>(useCase: T, context?: any) {
    switch (useCase) {
      case UseCase.GET_ALL_ARTICLES:
        return new LoggerCommandDecorator(
          new GetAllArticles(
            new ArticlesFileRepository(
              FileLoader.create(),
              TranslationService.create(Translator.create())
            ),
            context.locale
          ),
          UseCaseFactory.logger
        )
      case UseCase.GET_TALKS_GIVEN:
        return new LoggerCommandDecorator(
          new GetTalksGiven(
            new TalksFileRepository(
              FileLoader.create(),
              TranslationService.create(Translator.create())
            ),
            context.locale
          ),
          UseCaseFactory.logger
        )
      case UseCase.GET_ARTICLE:
        return new LoggerCommandDecorator(
          new GetArticle(
            new ArticlesFileRepository(
              FileLoader.create(),
              TranslationService.create(Translator.create())
            ),
            context.id,
            context.locale
          ),
          UseCaseFactory.logger
        )
      default:
        throw new Error(`Use case "${useCase}" not found`)
    }
  }
}
