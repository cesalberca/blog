import type { Id } from '../../../core/id'
import type { Article } from './article'
import type { Locale } from '../../../core/i18n/locale'
import type { Slug } from './slug'

export interface ArticlesRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Article>
  findAllByLocale(locale: Locale): Promise<Article[]>
  findPostSlugs(locale: Locale): Promise<Slug[]>
}
