export class Datetime {
  private constructor(private readonly _value: Date) {}

  get value(): Date {
    return this._value
  }

  static fromIso(value: string) {
    return new Datetime(new Date(value))
  }

  static fromDate(value: Date) {
    return new Datetime(value)
  }

  static fromNow() {
    return new Datetime(new Date())
  }

  static fromTimestamp(value: number) {
    return new Datetime(new Date(value))
  }

  get year() {
    return this._value.getFullYear()
  }

  getTime() {
    return this._value.getTime()
  }

  format() {
    return this._value.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  toIso() {
    return this._value.toISOString()
  }

  toUTCString() {
    return this._value.toUTCString()
  }

  toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    return this._value.toLocaleDateString(locales, options)
  }

  toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    return this._value.toLocaleString(locales, options)
  }

  // Comparison methods
  isAfter(other: Datetime): boolean {
    return this._value > other._value
  }

  isBefore(other: Datetime): boolean {
    return this._value < other._value
  }

  isEqual(other: Datetime): boolean {
    return this._value.getTime() === other._value.getTime()
  }

  // Static comparison method for sorting
  static compare(a: Datetime, b: Datetime): number {
    return a.getTime() - b.getTime()
  }
}
