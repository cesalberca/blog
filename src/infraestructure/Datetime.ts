export class Datetime {
  private constructor(private readonly _value: Date) {}

  get value(): Date {
    return this._value
  }

  public static fromString(value: string) {
    return new Datetime(new Date(value))
  }

  public static fromDate(value: Date) {
    return new Datetime(value)
  }

  public static fromNow() {
    return new Datetime(new Date())
  }

  public get year() {
    return this._value.getFullYear()
  }

  public format() {
    return this._value.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  public toString() {
    return this._value.toISOString()
  }
}
