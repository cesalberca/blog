export class Slug {
  private constructor(private readonly _value: string) {}

  static fromValue(value: string) {
    return new Slug(value)
  }

  get value() {
    return this._value
  }
}
