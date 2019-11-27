import { interfaces } from 'inversify'
import { container } from 'inversify-props'
import { TYPES } from './types'
import { EncoderService } from './domain/encoder-service'
import { TranslationService } from './domain/translation-service'
import { HtmlParserService } from './domain/html-parser-service'
import { FileLoader } from './infraestructure/FileLoader'
import { LanguageService } from './domain/talks/LanguageService'
import { TalksFileRepository } from './infraestructure/talks/TalksFileRepository'
import { TalksRepository } from './domain/talks/TalksRepository'
import { ArticlesFileRepository } from './infraestructure/articles/ArticlesFileRepository'
import { UseCaseDecorator } from './application/use-cases/use-case-decorator'
import { Stdout } from './domain/stdout'
import { Logger } from './domain/logger'
import { TwitterSharerService } from './domain/twitter-sharer-service'
import { GetAllArticlesUseCase } from './application/use-cases/get-all-articles-use-case'
import { GetArticleUseCase } from './application/use-cases/get-article-use-case'
import { GetTalksGivenUseCase } from './application/use-cases/get-talks-given-use-case'
import { ArticlesRepository } from './domain/articles/articles-repository'
import { Translator } from './domain/language/translator'
import { State } from './application/state/state'
import { Translate } from './ui/components/translate'
import { VueStateManager } from './ui/state/vue-state-manager'
import { StateManager } from './application/state/state-manager'
import { BaseStateManager } from './application/state/base-state-manager'

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
      .bind<State>(TYPES.STATE)
      .to(State)
      .inSingletonScope()
    container
      .bind<StateManager>(TYPES.STATE_MANAGER)
      .to(VueStateManager)
      .inSingletonScope()
    container
      .bind<BaseStateManager>(TYPES.BASE_STATE_MANAGER)
      .to(BaseStateManager)
      .inSingletonScope()
    container.bind<Window>(TYPES.WINDOW).toConstantValue(window)
    container.bind<Translate>(TYPES.TRANSLATE).toFunction(
      key =>
        container
          .get<Translator>(TYPES.TRANSLATOR)
          .translations.get(container.get<StateManager>(TYPES.STATE_MANAGER).state.locale)!
          .get(key)!
    )

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
