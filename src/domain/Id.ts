export class Id {
  private constructor(private readonly _value: string) {}

  public static fromValue(value: string) {
    return new Id(value)
  }

  public get slug() {
    return encodeURIComponent(this._value.toLowerCase()).replace(/%20/g, '+')
  }

  public get value() {
    return this._value
  }
}
