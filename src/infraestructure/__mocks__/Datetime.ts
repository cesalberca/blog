export class Datetime {
  private constructor(private readonly _value: Date) {}

  public static fromNow() {
    return new Datetime(new Date(2019, 2, 3))
  }

  public toString() {
    return this._value.toISOString()
  }
}
