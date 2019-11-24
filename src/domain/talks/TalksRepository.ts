import { Id } from '../Id'
import { Talk } from './Talk'
import { Locale } from '../language/Locale'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
