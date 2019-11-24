import 'reflect-metadata'
import { Container } from 'inversify'
import { Translator } from './domain/language'
import {
  ARTICLES_REPOSITORY_TYPE,
  ENCODER_SERVICE_TYPE,
  FILE_LOADER_TYPE,
  GET_ALL_ARTICLES_USE_CASE_TYPE,
  GET_ARTICLE_USE_CASE_TYPE,
  GET_TALKS_GIVEN_USE_CASE_TYPE,
  HTML_PARSER_SERVICE_TYPE,
  LANGUAGE_SERVICE_TYPE,
  LOGGER_TYPE,
  STDOUT_TYPE,
  TALKS_REPOSITORY_TYPE,
  TRANSLATION_SERVICE_TYPE,
  TRANSLATOR_TYPE,
  TWITTER_SHARER_SERVICE_TYPE,
  USE_CASE_DECORATOR_TYPE
} from './types'
import { EncoderService } from './domain/EncoderService'
import { TranslationService } from './domain/TranslationService'
import { HtmlParserService } from './domain/HtmlParserService'
import { FileLoader } from './infraestructure/FileLoader'
import { LanguageService } from './domain/talks/LanguageService'
import { TalksFileRepository } from './infraestructure/talks/TalksFileRepository'
import { TalksRepository } from './domain/talks/TalksRepository'
import { ArticlesRepository } from './domain/articles'
import { ArticlesFileRepository } from './infraestructure/articles/ArticlesFileRepository'
import {
  GetAllArticlesUseCase,
  GetArticleUseCase,
  GetTalksGivenUseCase
} from './application/useCases'
import { UseCaseDecorator } from './application/useCases/UseCaseDecorator'
import { Stdout } from './infraestructure/Stdout'
import { Logger } from './infraestructure/Logger'
import { TwitterSharerService } from './domain/TwitterSharerService'

export class ContainerFactory {
  private static instance: ContainerFactory | null = null
  private readonly _container: Container

  private constructor() {
    const container = new Container()
    container.bind<FileLoader>(FILE_LOADER_TYPE).to(FileLoader)
    container.bind<Translator>(TRANSLATOR_TYPE).to(Translator)
    container.bind<EncoderService>(ENCODER_SERVICE_TYPE).to(EncoderService)
    container.bind<TranslationService>(TRANSLATION_SERVICE_TYPE).to(TranslationService)
    container.bind<TwitterSharerService>(TWITTER_SHARER_SERVICE_TYPE).to(TwitterSharerService)
    container.bind<HtmlParserService>(HTML_PARSER_SERVICE_TYPE).to(HtmlParserService)
    container.bind<LanguageService>(LANGUAGE_SERVICE_TYPE).to(LanguageService)
    container.bind<TalksRepository>(TALKS_REPOSITORY_TYPE).to(TalksFileRepository)
    container.bind<ArticlesRepository>(ARTICLES_REPOSITORY_TYPE).to(ArticlesFileRepository)
    container.bind<GetAllArticlesUseCase>(GET_ALL_ARTICLES_USE_CASE_TYPE).to(GetAllArticlesUseCase)
    container.bind<GetArticleUseCase>(GET_ARTICLE_USE_CASE_TYPE).to(GetArticleUseCase)
    container.bind<GetTalksGivenUseCase>(GET_TALKS_GIVEN_USE_CASE_TYPE).to(GetTalksGivenUseCase)
    container.bind<UseCaseDecorator>(USE_CASE_DECORATOR_TYPE).to(UseCaseDecorator)
    container.bind<Logger>(LOGGER_TYPE).to(Logger)
    container
      .bind<Stdout>(STDOUT_TYPE)
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
