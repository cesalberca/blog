import { Container } from 'inversify'
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
import { Stdout } from './infraestructure/Stdout'
import { Logger } from './infraestructure/Logger'
import { TwitterSharerService } from './domain/TwitterSharerService'
import { GetAllArticlesUseCase } from './application/useCases/GetAllArticlesUseCase'
import { GetArticleUseCase } from './application/useCases/GetArticleUseCase'
import { GetTalksGivenUseCase } from './application/useCases/GetTalksGivenUseCase'
import { ArticlesRepository } from './domain/articles/ArticlesRepository'
import { Translator } from './domain/language/Translator'

export class ContainerFactory {
  private static instance: ContainerFactory | null = null
  private readonly _container: Container

  private constructor() {
    // eslint-disable-next-line no-console
    console.log('hi')
    const container = new Container()
    container.bind<FileLoader>(TYPES.FILE_LOADER_TYPE).to(FileLoader)
    container.bind<Translator>(TYPES.TRANSLATOR_TYPE).to(Translator)
    container.bind<EncoderService>(TYPES.ENCODER_SERVICE_TYPE).to(EncoderService)
    container.bind<TranslationService>(TYPES.TRANSLATION_SERVICE_TYPE).to(TranslationService)
    container.bind<TwitterSharerService>(TYPES.TWITTER_SHARER_SERVICE_TYPE).to(TwitterSharerService)
    container.bind<HtmlParserService>(TYPES.HTML_PARSER_SERVICE_TYPE).to(HtmlParserService)
    container.bind<LanguageService>(TYPES.LANGUAGE_SERVICE_TYPE).to(LanguageService)
    container.bind<TalksRepository>(TYPES.TALKS_REPOSITORY_TYPE).to(TalksFileRepository)
    container.bind<ArticlesRepository>(TYPES.ARTICLES_REPOSITORY_TYPE).to(ArticlesFileRepository)
    container
      .bind<GetAllArticlesUseCase>(TYPES.GET_ALL_ARTICLES_USE_CASE_TYPE)
      .to(GetAllArticlesUseCase)
    container.bind<GetArticleUseCase>(TYPES.GET_ARTICLE_USE_CASE_TYPE).to(GetArticleUseCase)
    container
      .bind<GetTalksGivenUseCase>(TYPES.GET_TALKS_GIVEN_USE_CASE_TYPE)
      .to(GetTalksGivenUseCase)
    container.bind<UseCaseDecorator>(TYPES.USE_CASE_DECORATOR_TYPE).to(UseCaseDecorator)
    container.bind<Logger>(TYPES.LOGGER_TYPE).to(Logger)
    container
      .bind<Stdout>(TYPES.STDOUT_TYPE)
      // eslint-disable-next-line
      .toConstantValue({ error: console.error, info: console.log, warn: console.warn })

    this._container = container
  }

  get container() {
    return this._container
  }

  static get() {
    if (this.instance === null) {
      this.instance = new this()
    }

    return this.instance
  }
}
