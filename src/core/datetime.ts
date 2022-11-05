import type { Locale } from './i18n/locale'

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

  get year() {
    return this._value.getFullYear()
  }

  // TODO: Receive locale
  format(_locale?: Locale) {
    return this._value.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  toIso() {
    return this._value.toISOString()
  }
}
