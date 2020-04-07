import { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers.js'

export type Translation = (key: keyof TranslationIdentifiers) => string
