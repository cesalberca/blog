export type CallbackFunction<T = unknown> = (...params: unknown[]) => T

export class Maybe<T> {
  static some<T>(value: T): Maybe<T> {
    if (!this.isValid(value)) {
      throw Error('Provided value must not be empty')
    }
    return new Maybe(value)
  }

  static none<T>(): Maybe<T> {
    return new Maybe<T>(null)
  }

  static fromValue<T>(value: T | undefined | null): Maybe<T> {
    return this.isValid(value) ? Maybe.some(value as T) : Maybe.none<T>()
  }

  constructor(private value: T | null) {}

  get(): T {
    if (!this.has()) {
      throw new Error("It  doesn't have a value. Make sure it has a value first by using .has method")
    }
    return this.value as T
  }

  getOrElse(defaultValue: T): T {
    return this.value === null ? defaultValue : this.value
  }

  getOrExecute(defaultValue: CallbackFunction<T>): T {
    return this.value === null ? defaultValue() : this.value
  }

  getOrThrow(error: Error): T {
    return this.value === null
      ? (() => {
          throw error
        })()
      : this.value
  }

  has(): boolean {
    return this.value !== null
  }

  map<R>(f: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return Maybe.some(f(this.value))
    }
  }

  flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return f(this.value)
    }
  }

  private static isNumberZero<R>(value: R): boolean {
    return typeof value === 'number' && value === 0
  }

  private static isValid(value: unknown | null | undefined): boolean {
    return !!value || this.isNumberZero(value)
  }
}
