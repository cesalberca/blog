/**
 * HTTP Client
 * Based on fetch wrapper best practices with automatic parameter encoding
 */
import type { ApiError } from '@/core/http-client/api-error'
import type { InternalRequestConfig } from '@/core/http-client/internal-request-config'
import type { ApiResponse } from '@/core/http-client/api-response'

interface RequestConfig extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean | null | undefined>
  timeout?: number
  retries?: number
  retryDelay?: number
  body?: unknown
}

class HttpClient {
  private readonly baseUrl: string
  private readonly defaultConfig: RequestConfig

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
  private encodeParams(params: Record<string, unknown>): string {
    const search = new URLSearchParams()

    const append = (key: string, value: unknown) => {
      if (value === null || value === undefined || value === '') return
      if (Array.isArray(value)) {
        value.forEach((v) => {
          append(key, v)
        })
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([k, v]) => {
          append(`${key}[${k}]`, v)
        })
      } else {
        search.append(key, String(value))
      }
    }

    Object.entries(params).forEach(([k, v]) => {
      append(k, v)
    })

    return search.toString()
  }

  /**
   * Builds the complete URL with encoded parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, unknown>): string {
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
  private async executeRequest<T>(
    url: string,
    config: InternalRequestConfig,
    attempt: number = 1,
  ): Promise<ApiResponse<T>> {
    const { retries = 0, retryDelay = 1000, timeout = 10000, ...requestInit } = config

    try {
      const controller = this.createTimeoutController(timeout)

      const response = await fetch(url, {
        ...requestInit,
        signal: controller.signal,
      })

      return await this.processResponse<T>(response)
    } catch (error) {
      // Retry logic for network errors (not HTTP errors)
      if (attempt <= retries && !(error as ApiError).status) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay))
        return this.executeRequest<T>(url, config, attempt + 1)
      }

      throw error
    }
  }

  /**
   * Generic request method
   */
  async request<T = unknown>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    const mergedConfig = { ...this.defaultConfig, ...config }
    const { params, body, ...requestConfig } = mergedConfig

    const url = this.buildUrl(endpoint, params)

    // Handle body serialization
    const finalConfig: InternalRequestConfig = { ...requestConfig }
    if (body && typeof body === 'object' && !(body instanceof FormData) && !(body instanceof URLSearchParams)) {
      finalConfig.body = JSON.stringify(body)
    } else if (body !== undefined && body !== null) {
      finalConfig.body = body as BodyInit
    }

    return this.executeRequest<T>(url, finalConfig)
  }

  async get<T = unknown>(endpoint: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    const requestConfig: RequestConfig = {
      ...config,
      method: 'GET',
    }

    return this.request<T>(endpoint, requestConfig)
  }

  async post<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body,
    })
  }

  async put<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body,
    })
  }

  async patch<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body,
    })
  }

  async delete<T = unknown>(
    endpoint: string,
    config?: Omit<RequestConfig, 'method' | 'body'>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'DELETE',
    })
  }
}

// Create a default instance
export const httpClient = new HttpClient()

export { HttpClient }
