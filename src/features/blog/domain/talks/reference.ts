export class Reference {
  constructor(private readonly _title: string, private readonly _url: string) {}

  static fromValue(title: string, url: string) {
    return new Reference(title, url)
  }

  get value() {
    return {
      title: this._title,
      url: this._url,
    }
  }
}
