import { Id } from '../Id'
import { Article } from './Article'
import { Locale } from '../../infraestructure/language'

export interface ArticlesRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Article>
}
