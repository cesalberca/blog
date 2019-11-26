import { Id } from '../id'
import { Talk } from './Talk'
import { Locale } from '../language/locale'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
