export class Datetime {
  constructor(private readonly _value: Date) {}

  static fromNow() {
    return new Datetime(new Date(2019, 2, 3))
  }

  toString() {
    return this._value.toISOString()
  }
}
