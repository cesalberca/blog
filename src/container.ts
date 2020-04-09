import '/web_modules/reflect-metadata.js'
import { TYPES } from './types.js'
import { EncoderService } from './domain/encoder-service.js'
import { TranslationService } from './domain/translation-service.js'
import { HtmlParserService } from './domain/html-parser-service.js'
import { LanguageService } from './domain/talks/language-service.js'
import { TalksFileRepository } from './infrastructure/talks/talks-file-repository.js'
import { TalksRepository } from './domain/talks/talks-repository.js'
import { ArticlesFileRepository } from './infrastructure/articles/articles-file-repository.js'
import { UseCaseDecorator } from './application/use-cases/use-case-decorator.js'
import { Logger } from './domain/logger.js'
import { TwitterSharerService } from './domain/articles/twitter-sharer-service.js'
import { GetAllArticlesUseCase } from './application/use-cases/get-all-articles-use-case.js'
import { GetArticleUseCase } from './application/use-cases/get-article-use-case.js'
import { GetTalksGivenUseCase } from './application/use-cases/get-talks-given-use-case.js'
import { ArticlesRepository } from './domain/articles/articles-repository.js'
import { Translator } from './domain/language/translator.js'
import { Translation } from './ui/components/translation.js'
import { State } from './application/state/state.js'
import { NavigateToArticle } from './ui/actions/navigate-to-article.js'
import { DifficultyService } from './domain/talks/difficulty-service.js'
import { TalkDetail } from './ui/pages/talks/talk-detail.js'
import { container } from '/web_modules/inversify-props.js'
import { Http } from './domain/http.js'
import { map } from '/web_modules/rxjs/operators.js'

container
  .bind<TranslationService>(TYPES.TRANSLATION_SERVICE)
  .to(TranslationService)
  .inSingletonScope()
container.bind<Translator>(TYPES.TRANSLATOR).to(Translator).inSingletonScope()
container.bind<typeof fetch>(TYPES.FETCHER).toConstantValue(window.fetch.bind(window))
container.bind<Http>(TYPES.HTTP).to(Http).inSingletonScope()
container.bind<EncoderService>(TYPES.ENCODER_SERVICE).to(EncoderService).inSingletonScope()
container
  .bind<TwitterSharerService>(TYPES.TWITTER_SHARER_SERVICE)
  .to(TwitterSharerService)
  .inSingletonScope()
container
  .bind<HtmlParserService>(TYPES.HTML_PARSER_SERVICE)
  .to(HtmlParserService)
  .inSingletonScope()
container.bind<LanguageService>(TYPES.LANGUAGE_SERVICE).to(LanguageService).inSingletonScope()
container.bind<TalksRepository>(TYPES.TALKS_REPOSITORY).to(TalksFileRepository).inSingletonScope()
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
container.bind<UseCaseDecorator>(TYPES.USE_CASE_DECORATOR).to(UseCaseDecorator).inSingletonScope()
container.bind<State>(TYPES.STATE).to(State).inSingletonScope()

container.bind<Translation>(TYPES.TRANSLATION).toFunction(key =>
  container
    .get<State>(TYPES.STATE)
    .observable()
    .pipe(
      map(x => x.locale),
      map(x => container.get<Translator>(TYPES.TRANSLATOR).translations.get(x)!.get(key)!)
    )
)
container
  .bind<NavigateToArticle>(TYPES.NAVIGATE_TO_ARTICLE)
  .to(NavigateToArticle)
  .inSingletonScope()
container.bind<DifficultyService>(TYPES.DIFFICULTY_SERVICE).to(DifficultyService).inSingletonScope()
container.bind<TalkDetail>(TYPES.TALK_DETAIL).to(TalkDetail).inSingletonScope()

container.bind<Logger>(TYPES.LOGGER).toConstantValue(window.console)
container.bind<Window>(TYPES.WINDOW).toConstantValue(window)

export { container }
