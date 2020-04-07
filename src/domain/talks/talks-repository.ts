import { Id } from '../id.js'
import { Talk } from './talk.js'
import { Locale } from '../language/locale.js'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
