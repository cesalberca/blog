import { Id } from '../id'
import { Article } from './article'
import { Locale } from '../language/locale'

export interface ArticlesRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Article>
  findAllByLocale(locale: Locale): Promise<Article[]>
}
