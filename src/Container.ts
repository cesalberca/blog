import { interfaces } from 'inversify'
import { container } from 'inversify-props'
import { TYPES } from './types'
import { EncoderService } from './domain/EncoderService'
import { TranslationService } from './domain/TranslationService'
import { HtmlParserService } from './domain/HtmlParserService'
import { FileLoader } from './infraestructure/FileLoader'
import { LanguageService } from './domain/talks/LanguageService'
import { TalksFileRepository } from './infraestructure/talks/TalksFileRepository'
import { TalksRepository } from './domain/talks/TalksRepository'
import { ArticlesFileRepository } from './infraestructure/articles/ArticlesFileRepository'
import { UseCaseDecorator } from './application/useCases/UseCaseDecorator'
import { Stdout } from './domain/Stdout'
import { Logger } from './domain/Logger'
import { TwitterSharerService } from './domain/TwitterSharerService'
import { GetAllArticlesUseCase } from './application/useCases/GetAllArticlesUseCase'
import { GetArticleUseCase } from './application/useCases/GetArticleUseCase'
import { GetTalksGivenUseCase } from './application/useCases/GetTalksGivenUseCase'
import { ArticlesRepository } from './domain/articles/ArticlesRepository'
import { Translator } from './domain/language/Translator'
import { State } from './application/state/State'
import { Translate } from './ui/components/Translate'
import { VueStateManager } from './ui/state/VueStateManager'

export class Container {
  private static _instance: Container | null = null
  private readonly _container: interfaces.Container

  private constructor() {
    container
      .bind<FileLoader>(TYPES.FILE_LOADER)
      .to(FileLoader)
      .inSingletonScope()
    container
      .bind<Translator>(TYPES.TRANSLATOR)
      .to(Translator)
      .inSingletonScope()
    container
      .bind<EncoderService>(TYPES.ENCODER_SERVICE)
      .to(EncoderService)
      .inSingletonScope()
    container
      .bind<TranslationService>(TYPES.TRANSLATION_SERVICE)
      .to(TranslationService)
      .inSingletonScope()
    container
      .bind<TwitterSharerService>(TYPES.TWITTER_SHARER_SERVICE)
      .to(TwitterSharerService)
      .inSingletonScope()
    container
      .bind<HtmlParserService>(TYPES.HTML_PARSER_SERVICE)
      .to(HtmlParserService)
      .inSingletonScope()
    container
      .bind<LanguageService>(TYPES.LANGUAGE_SERVICE)
      .to(LanguageService)
      .inSingletonScope()
    container
      .bind<TalksRepository>(TYPES.TALKS_REPOSITORY)
      .to(TalksFileRepository)
      .inSingletonScope()
    container
      .bind<ArticlesRepository>(TYPES.ARTICLES_REPOSITORY)
      .to(ArticlesFileRepository)
      .inSingletonScope()
    container
      .bind<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE)
      .to(GetAllArticlesUseCase)
      .inSingletonScope()
    container
      .bind<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE)
      .to(GetArticleUseCase)
      .inSingletonScope()
    container
      .bind<GetTalksGivenUseCase>(TYPES.GET_TALKS_GIVEN_USE_CASE)
      .to(GetTalksGivenUseCase)
      .inSingletonScope()
    container
      .bind<UseCaseDecorator>(TYPES.USE_CASE_DECORATOR)
      .to(UseCaseDecorator)
      .inSingletonScope()
    container
      .bind<Logger>(TYPES.LOGGER)
      .to(Logger)
      .inSingletonScope()
    container.bind<Stdout>(TYPES.STDOUT).toConstantValue({
      // eslint-disable-next-line
      error: console.error,
      // eslint-disable-next-line
      info: console.log,
      // eslint-disable-next-line
      warn: console.warn
    })
    container
      .bind<Translate>(TYPES.TRANSLATE)
      .toFunction(
        key => new Translator().translations.get(VueStateManager.instance.state.locale)!.get(key)!
      )
    container
      .bind<State>(TYPES.STATE)
      .to(State)
      .inSingletonScope()
    container.bind<Window>(TYPES.WINDOW).toConstantValue(window)

    this._container = container
  }

  static instance() {
    if (this._instance === null) {
      Container.boostrap()
    }

    return this._instance!._container
  }

  static boostrap() {
    this._instance = new this()
  }
}
