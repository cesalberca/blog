import { TranslationIdentifiers } from '../../domain/language/translations/translation-identifiers'

export type Translate = (key: keyof TranslationIdentifiers) => string
