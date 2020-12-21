import { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers.js'
import { Observable } from 'rxjs'

export type Translation = (key: keyof TranslationIdentifiers) => Observable<string>
