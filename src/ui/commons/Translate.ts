import { TranslationIdentifiers } from '../../domain/language'

export type Translate = (key: keyof TranslationIdentifiers) => string
