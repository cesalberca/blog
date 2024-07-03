export class Markdown {
  constructor(readonly value: string) {}

  static fromValue(value: string) {
    return new Markdown(value)
  }
}
