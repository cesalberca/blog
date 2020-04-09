import { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers.js'
import { Observable } from '/web_modules/rxjs.js'

export type Translation = (key: keyof TranslationIdentifiers) => Observable<string>
