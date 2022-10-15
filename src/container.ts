import 'reflect-metadata'
import { container } from 'tsyringe'
import { TYPES } from './types'
import { ArticlesFileRepository } from './features/articles/infrastructure/articles-file-repository'
import { TalksFileRepository } from './features/talks/infrastructure/talks-file-repository'
import type { TalksRepository } from './features/talks/domain/talks-repository'
import type { ArticlesRepository } from './features/articles/domain/articles-repository'
import type { PreferencesRepository } from './core/preferences/domain/preferences-repository'
import { PreferencesLocalRepository } from './core/preferences/infrastructure/preferences-local-repository'

container.register(TYPES.STORAGE, { useValue: global.localStorage })
container.registerSingleton<TalksRepository>(TYPES.TALKS_REPOSITORY, TalksFileRepository)
container.registerSingleton<ArticlesRepository>(TYPES.ARTICLES_REPOSITORY, ArticlesFileRepository)
container.registerSingleton<PreferencesRepository>(TYPES.PREFERENCES_REPOSITORY, PreferencesLocalRepository)

export { container }
