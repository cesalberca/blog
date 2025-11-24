export interface ApiError extends Error {
  status?: number
  statusText?: string
  response?: Response
  data?: unknown
}
