import type { Id } from '../id'
import type { Article } from './article'
import type { Locale } from '../language/locale'

export interface ArticlesRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Article>
  findAllByLocale(locale: Locale): Promise<Article[]>
}
