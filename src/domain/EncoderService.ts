import { Injectable } from '../Injectable'

@Injectable()
export class EncoderService {
  encode(value: string) {
    return encodeURIComponent(value).replace(/%20/g, '+')
  }
}
