export class Topic {
  public constructor(private readonly _value: string) {}

  public static fromValue(label: string) {
    return new Topic(label)
  }

  get value(): string {
    return this._value
  }
}
