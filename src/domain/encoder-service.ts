import { Injectable } from './types/injectable.js'

@Injectable()
export class EncoderService {
  encode(value: string) {
    return encodeURIComponent(value).replace(/%20/g, '+')
  }

  slug(value: string) {
    return this.encode(value.toLowerCase())
  }
}
