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

const container = new Container()
container
  .bind<Translator>(TRANSLATOR_TYPE)
  .to(Translator)
  .inSingletonScope()
container
  .bind<EncoderService>(ENCODER_SERVICE_TYPE)
  .to(EncoderService)
  .inSingletonScope()
container
  .bind<TranslationService>(TRANSLATION_SERVICE_TYPE)
  .to(TranslationService)
  .inSingletonScope()
container
  .bind<TwitterSharerService>(TWITTER_SHARER_SERVICE_TYPE)
  .to(TwitterSharerService)
  .inSingletonScope()
container
  .bind<HtmlParserService>(HTML_PARSER_SERVICE_TYPE)
  .to(HtmlParserService)
  .inSingletonScope()
container
  .bind<FileLoader>(FILE_LOADER_TYPE)
  .to(FileLoader)
  .inSingletonScope()
container
  .bind<LanguageService>(LANGUAGE_SERVICE_TYPE)
  .to(LanguageService)
  .inSingletonScope()
container
  .bind<TalksRepository>(TALKS_REPOSITORY_TYPE)
  .to(TalksFileRepository)
  .inSingletonScope()
container
  .bind<ArticlesRepository>(ARTICLES_REPOSITORY_TYPE)
  .to(ArticlesFileRepository)
  .inSingletonScope()
container
  .bind<GetAllArticlesUseCase>(GET_ALL_ARTICLES_USE_CASE_TYPE)
  .to(GetAllArticlesUseCase)
  .inSingletonScope()
container
  .bind<GetArticleUseCase>(GET_ARTICLE_USE_CASE_TYPE)
  .to(GetArticleUseCase)
  .inSingletonScope()
container
  .bind<GetTalksGivenUseCase>(GET_TALKS_GIVEN_USE_CASE_TYPE)
  .to(GetTalksGivenUseCase)
  .inSingletonScope()
container
  .bind<UseCaseDecorator>(USE_CASE_DECORATOR_TYPE)
  .to(UseCaseDecorator)
  .inSingletonScope()
container
  .bind<Logger>(LOGGER_TYPE)
  .to(Logger)
  .inSingletonScope()
container
  .bind<Stdout>(STDOUT_TYPE)
  // eslint-disable-next-line
  .toConstantValue({ error: console.error, info: console.log, warn: console.warn })

export { container }
