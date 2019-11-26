import { EncoderService } from './encoder-service'
import { TYPES } from '../types'
import { Container } from '../container'

export class Id {
  constructor(private readonly _value: string, private readonly encoderService: EncoderService) {}

  static fromValue(value: string) {
    return new Id(value, Container.instance().get<EncoderService>(TYPES.ENCODER_SERVICE))
  }

  get slug() {
    return this.encoderService.encode(this._value.toLowerCase())
  }

  get value() {
    return this._value
  }
}