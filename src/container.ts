import 'reflect-metadata'
import { container } from 'tsyringe'
import { TYPES } from './types'
import { ArticlesFileRepository } from './features/blog/infrastructure/articles/articles-file-repository'
import { TalksFileRepository } from './features/blog/infrastructure/talks/talks-file-repository'
import type { Store } from './features/blog/application/state/store'
import { Translator } from './features/blog/domain/language/translator'
import type { TalksRepository } from './features/blog/domain/talks/talks-repository'
import type { ArticlesRepository } from './features/blog/domain/articles/articles-repository'
import type { TranslationIdentifiers } from './features/blog/domain/language/translations/translation-identifiers'
import { map } from 'rxjs'

container.register(TYPES.FETCHER, { useValue: global.fetch })
container.register(TYPES.STORAGE, { useValue: global.localStorage })
container.register(TYPES.WINDOW, { useValue: global })

container.registerSingleton<TalksRepository>(TYPES.TALKS_REPOSITORY, TalksFileRepository)
container.registerSingleton<ArticlesRepository>(TYPES.ARTICLES_REPOSITORY, ArticlesFileRepository)

container.register(TYPES.TRANSLATION, {
  useValue: (key: keyof TranslationIdentifiers) =>
    container
      .resolve<Store>(TYPES.STORE)
      .observable()
      .pipe(
        map(x => x.locale),
        map(x => container.resolve(Translator).translations.get(x)!.get(key)!),
      ),
})

export { container }
