export type InternalRequestConfig = RequestInit & {
  timeout?: number
  retries?: number
  retryDelay?: number
}
