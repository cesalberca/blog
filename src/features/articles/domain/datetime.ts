import type { Locale } from '../../../core/i18n/locale'

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

  // TODO: Receive locale
  format(_locale?: Locale) {
    return this._value.toLocaleDateString('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  toString() {
    return this._value.toISOString()
  }
}
