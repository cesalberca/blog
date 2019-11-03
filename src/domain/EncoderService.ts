export class EncoderService {
  encode(value: string) {
    return encodeURIComponent(value).replace(/%20/g, '+')
  }

  static create() {
    return new EncoderService()
  }
}
