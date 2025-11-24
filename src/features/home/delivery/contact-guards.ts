import type { ContactResponseKo } from '@/app/api/contact/route'

/**
 * Narrow unknown values to a Contact API KO response shape.
 * A valid KO has: { success: false, error: string }
 */
export function isContactResponseKo(value: unknown): value is ContactResponseKo {
  if (value === null || typeof value !== 'object') return false
  const v = value as Partial<ContactResponseKo>
  return !v.success
}
