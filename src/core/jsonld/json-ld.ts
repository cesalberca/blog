import { sanitizeJsonLd } from './sanitize-json-ld'
import type { Thing, WithContext } from 'schema-dts'

export function jsonLd<T extends Thing>(jsonLd: WithContext<T>) {
  return sanitizeJsonLd(jsonLd)
}
