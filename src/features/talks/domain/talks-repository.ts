import type { Id } from '../../../core/id'
import type { Talk } from './talk'
import type { Locale } from '../../../core/i18n/locale'

export interface TalksRepository {
  findOneByLocale(id: Id, locale: Locale): Promise<Talk>
  findAllByLocale(locale: Locale): Promise<Talk[]>
}
