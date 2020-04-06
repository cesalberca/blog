import { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers'

export type Translation = (key: keyof TranslationIdentifiers) => string
