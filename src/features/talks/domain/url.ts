export class Url {
  private constructor(private readonly _value: string) {}

  static fromValue(value: string) {
    return new Url(value)
  }

  get value() {
    return this._value
  }
}
