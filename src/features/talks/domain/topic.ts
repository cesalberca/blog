export class Topic {
  private constructor(private readonly _value: string) {}

  static fromValue(label: string) {
    return new Topic(label)
  }

  get value(): string {
    return this._value
  }
}
