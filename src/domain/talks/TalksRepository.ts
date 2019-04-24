import { Id } from '../Id'
import { Locale } from '../language'
import { Talk } from './Talk'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
