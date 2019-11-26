export class Datetime {
  constructor(private readonly _value: Date) {}

  get value(): Date {
    return this._value
  }

  static fromString(value: string) {
    return new Datetime(new Date(value))
  }

  static fromDate(value: Date) {
    return new Datetime(value)
  }

  static fromNow() {
    return new Datetime(new Date())
  }

  get year() {
    return this._value.getFullYear()
  }

  format(locale: string | undefined = undefined) {
    return this._value.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  toString() {
    return this._value.toISOString()
  }
}
