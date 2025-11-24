export interface ApiResponse<T = unknown> {
  data: T
  status: number
  statusText: string
  headers: Headers
}
