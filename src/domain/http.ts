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
    if (!response.ok || response.status > 250) {
      throw new Error('HTTP Error')
    }

    const result = await response.blob()

    return result.text()
  }
}
