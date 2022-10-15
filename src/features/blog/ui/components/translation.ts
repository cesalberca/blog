import type { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers'
import type { Observable } from 'rxjs'

export type Translation = (key: keyof TranslationIdentifiers) => Observable<string>
