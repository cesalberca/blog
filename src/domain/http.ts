import { Inject } from './types/inject.js'
import { Injectable } from './types/injectable.js'
import { TYPES } from '../types.js'

@Injectable()
export class Http {
  constructor(@Inject(TYPES.FETCHER) private readonly fetcher: typeof fetch) {}

  async get(url: string): Promise<string> {
    const response = await this.fetcher(url)
    return this.getResponse(response)
  }

  private async getResponse(response: Response): Promise<string> {
    if (!(response.status >= 200 || response.status < 300) || !response.ok) {
      throw new Error('HTTP Error')
    }

    try {
      return response.text()
    } catch (e) {
      throw new Error('Parsing response error')
    }
  }
}
