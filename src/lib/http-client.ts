/**
 * HTTP Client
 * Based on fetch wrapper best practices with automatic parameter encoding
 */

interface RequestConfig extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean | null | undefined>
  timeout?: number
  retries?: number
  retryDelay?: number
  body?: any
}

interface ApiResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Headers
}

interface ApiError extends Error {
  status?: number
  statusText?: string
  response?: Response
  data?: any
}

class HttpClient {
  private baseUrl: string
  private defaultConfig: RequestConfig

  constructor(baseUrl: string = '', defaultConfig: RequestConfig = {}) {
    this.baseUrl = baseUrl
    this.defaultConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
      retries: 0,
      retryDelay: 1000,
      ...defaultConfig,
    }
  }

  /**
   * Encodes parameters as URL search params
   */
  private encodeParams(params: Record<string, any>): string {
    const search = new URLSearchParams()

    const append = (key: string, value: any) => {
      if (value == null || value === '') return
      if (Array.isArray(value)) {
        value.forEach(v => append(key, v))
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([k, v]) => append(`${key}[${k}]`, v))
      } else {
        search.append(key, String(value))
      }
    }

    Object.entries(params).forEach(([k, v]) => append(k, v))

    return search.toString()
  }

  /**
   * Builds the complete URL with encoded parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(endpoint, this.baseUrl || window.location.origin)

    if (params && Object.keys(params).length > 0) {
      const encodedParams = this.encodeParams(params)
      if (encodedParams) {
        url.search = encodedParams
      }
    }

    return url.toString()
  }

  /**
   * Creates an AbortController for request timeout
   */
  private createTimeoutController(timeout: number): AbortController {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), timeout)
    return controller
  }

  /**
   * Handles response processing and error throwing
   */
  private async processResponse<T>(response: Response): Promise<ApiResponse<T>> {
    let data: T

    const contentType = response.headers.get('content-type')

    if (contentType?.includes('application/json')) {
      data = await response.json()
    } else if (contentType?.includes('text/')) {
      data = (await response.text()) as unknown as T
    } else {
      data = (await response.blob()) as unknown as T
    }

    const apiResponse: ApiResponse<T> = {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    }

    if (!response.ok) {
      const error: ApiError = new Error(`HTTP Error: ${response.status} ${response.statusText}`)
      error.status = response.status
      error.statusText = response.statusText
      error.response = response
      error.data = data
      throw error
    }

    return apiResponse
  }

  /**
   * Executes the HTTP request with retry logic
   */
  private async executeRequest<T>(url: string, config: RequestConfig, attempt: number = 1): Promise<ApiResponse<T>> {
    const { retries = 0, retryDelay = 1000, timeout = 10000, ...requestConfig } = config

    try {
      const controller = this.createTimeoutController(timeout)

      const response = await fetch(url, {
        ...requestConfig,
        signal: controller.signal,
      })

      return await this.processResponse<T>(response)
    } catch (error) {
      // Retry logic for network errors (not HTTP errors)
      if (attempt <= retries && !(error as ApiError).status) {
        await new Promise(resolve => setTimeout(resolve, retryDelay))
        return this.executeRequest<T>(url, config, attempt + 1)
      }

      throw error
    }
  }

  /**
   * Generic request method
   */
  async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    const mergedConfig = { ...this.defaultConfig, ...config }
    const { params, body, ...requestConfig } = mergedConfig

    const url = this.buildUrl(endpoint, params)

    // Handle body serialization
    const finalConfig: RequestInit = { ...requestConfig }
    if (body && typeof body === 'object' && !(body instanceof FormData) && !(body instanceof URLSearchParams)) {
      finalConfig.body = JSON.stringify(body)
    } else if (body) {
      finalConfig.body = body
    }

    return this.executeRequest<T>(url, finalConfig)
  }

  /**
   * GET request
   */
  async get<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    const requestConfig: RequestConfig = {
      ...config,
      method: 'GET',
    }

    return this.request<T>(endpoint, requestConfig)
  }

  /**
   * POST request
   */
  async post<T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body,
    })
  }

  /**
   * PUT request
   */
  async put<T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body,
    })
  }

  /**
   * PATCH request
   */
  async patch<T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body,
    })
  }

  /**
   * DELETE request
   */
  async delete<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'DELETE',
    })
  }
}

// Create a default instance
export const httpClient = new HttpClient()

// Export the class for custom instances
export { HttpClient }

// Export types for use in other modules
export type { RequestConfig, ApiResponse, ApiError }
