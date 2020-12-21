import 'reflect-metadata'
import { TYPES } from './types'
import { EncoderService } from './domain/encoder-service'
import { TranslationService } from './domain/translation-service'
import { HtmlParserService } from './domain/html-parser-service'
import { LanguageService } from './domain/talks/language-service'
import { TalksFileRepository } from './infrastructure/talks/talks-file-repository'
import { TalksRepository } from './domain/talks/talks-repository'
import { ArticlesFileRepository } from './infrastructure/articles/articles-file-repository'
import { TwitterSharerService } from './domain/articles/twitter-sharer-service'
import { GetAllArticlesUseCase } from './application/use-cases/get-all-articles-use-case'
import { GetArticleUseCase } from './application/use-cases/get-article-use-case'
import { GetTalksGivenUseCase } from './application/use-cases/get-talks-given-use-case'
import { ArticlesRepository } from './domain/articles/articles-repository'
import { Translator } from './domain/language/translator'
import { Translation } from './ui/components/translation'
import { Store } from './application/state/store'
import { DifficultyService } from './domain/talks/difficulty-service'
import { TalkDetail } from './ui/pages/talks/talk-detail'
import { container } from 'inversify-props'
import { FileLoader } from './domain/file-loader'
import { map } from 'rxjs/operators'
import { Persistence } from './application/state/persistence'
import { Fetcher } from './domain/fetcher'

container
  .bind<TranslationService>(TYPES.TRANSLATION_SERVICE)
  .to(TranslationService)
  .inSingletonScope()
container.bind<Translator>(TYPES.TRANSLATOR).to(Translator).inSingletonScope()
container.bind<Fetcher>(TYPES.FETCHER).toConstantValue({ fetch: window.fetch.bind(this) })
container.bind<FileLoader>(TYPES.FILE_LOADER).to(FileLoader).inSingletonScope()
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
container.bind<Store>(TYPES.STORE).to(Store).inSingletonScope()

container.bind<Translation>(TYPES.TRANSLATION).toFunction(key =>
  container
    .get<Store>(TYPES.STORE)
    .observable()
    .pipe(
      map(x => x.locale),
      map(x => container.get<Translator>(TYPES.TRANSLATOR).translations.get(x)!.get(key)!)
    )
)

container.bind<DifficultyService>(TYPES.DIFFICULTY_SERVICE).to(DifficultyService).inSingletonScope()
container.bind<TalkDetail>(TYPES.TALK_DETAIL).to(TalkDetail).inSingletonScope()

container.bind<Storage>(TYPES.STORAGE).toConstantValue(window.localStorage)
container.bind<Persistence>(TYPES.PERSISTENCE).to(Persistence).inSingletonScope()

container.bind<Window>(TYPES.WINDOW).toConstantValue(window)

export { container }
