export class Datetime {
  private constructor(private readonly _value: Date) {}

  get value(): Date {
    return this._value
  }

  public static fromValue(value: Date) {
    return new Datetime(value)
  }

  public static fromNow() {
    return new Datetime(new Date())
  }

  public format() {
    return this._value.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
}
