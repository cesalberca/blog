export class Reference {
  public constructor(private readonly _title: string, private readonly _url: string) {}

  public static fromValue(title: string, url: string) {
    return new Reference(title, url)
  }

  public get value() {
    return {
      title: this._title,
      url: this._url
    }
  }
}
