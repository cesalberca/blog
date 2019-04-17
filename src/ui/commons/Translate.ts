import { TranslationIdentifiers } from '../../infraestructure/language'

export type Translate = (key: keyof TranslationIdentifiers) => string
