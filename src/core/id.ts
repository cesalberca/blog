export class Id {
  constructor(private readonly _value: string) {}

  static fromValue(value: string) {
    return new Id(value)
  }

  get value() {
    return this._value
  }
}
