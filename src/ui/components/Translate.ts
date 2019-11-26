import { TranslationIdentifiers } from '../../domain/language/translations/TranslationIdentifiers'

export type Translate = (key: keyof TranslationIdentifiers) => string
