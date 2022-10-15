import { Id } from '../../articles/domain/id'
import { Talk } from './talk'
import { Locale } from '../language/locale'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
