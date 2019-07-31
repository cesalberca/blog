export class EncoderService {
  public encode(value: string) {
    return encodeURIComponent(value).replace(/%20/g, '+')
  }

  public static create() {
    return new EncoderService()
  }
}
