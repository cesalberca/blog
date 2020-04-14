import { Inject } from './types/inject.js'
import { Injectable } from './types/injectable.js'
import { TYPES } from '../types.js'

@Injectable()
export class Http {
  constructor(@Inject(TYPES.FETCHER) private readonly fetcher: typeof fetch) {}

  async get(url: string): Promise<string> {
    const request = new Request(url)
    const response = await this.fetcher(request)
    return this.getResponse(response)
  }

  private async getResponse(response: Response): Promise<string> {
    if (!(response.status >= 200 || response.status < 300) || !response.ok) {
      throw new Error('HTTP Error')
    }

    try {
      const result = await response.blob()
      return result.text()
    } catch (e) {
      throw new Error('Parsing response error')
    }
  }
}
