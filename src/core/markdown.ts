import { serialize } from 'next-mdx-remote/serialize'

export class Markdown {
  constructor(readonly value: string) {}

  static fromValue(value: string) {
    return new Markdown(value)
  }

  toHtml() {
    return serialize(this.value)
  }
}
