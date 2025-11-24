import type { ApiError } from '@/core/http-client/api-error'

/**
 * Type guard for errors thrown by our HttpClient.
 *
 * It narrows unknown values to `ApiError`, which is an `Error` augmented with
 * HTTP-specific fields like `status`, `statusText`, `response`, and `data`.
 *
 * Usage:
 * ```ts
 * try {
 *   await httpClient.get('/endpoint')
 * } catch (error: unknown) {
 *   if (isApiError(error)) {
 *     // error.data may contain a server-provided structured error
 *   }
 * }
 * ```
 */
export function isApiError(value: unknown): value is ApiError {
  if (value === null || typeof value !== 'object') return false

  // Minimal, resilient check tailored to HttpClient's thrown errors
  // We purposely avoid strict instance checks because errors can cross realms.
  const obj = value as Partial<ApiError>

  // Consider it an ApiError if it carries any of our known http fields.
  // At least `status` or `data` should exist when thrown from HttpClient.
  const hasStatus = 'status' in obj && typeof obj.status !== 'undefined'
  const hasData = 'data' in obj
  const hasResponse = 'response' in obj
  const hasStatusText = 'statusText' in obj

  return hasStatus || hasData || hasResponse || hasStatusText
}
