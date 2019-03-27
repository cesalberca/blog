export class Markdown {
  private constructor(private readonly _value: string) {}

  public static fromValue(value: string) {
    return new Markdown(value)
  }

  public get value(): string {
    return this._value
  }

  public toHtml() {
    return this._value.toString()
  }
}
