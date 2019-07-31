import { EncoderService } from './EncoderService'

export class Id {
  public constructor(
    private readonly _value: string,
    private readonly encoderService: EncoderService
  ) {}

  public static fromValue(value: string) {
    return new Id(value, EncoderService.create())
  }

  public get slug() {
    return this.encoderService.encode(this._value.toLowerCase())
  }

  public get value() {
    return this._value
  }
}
