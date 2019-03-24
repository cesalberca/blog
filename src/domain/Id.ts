export class Id {
  public constructor(private readonly name: string) {}

  get value() {
    return encodeURIComponent(this.name.toLowerCase()).replace(/%20/g, '+')
  }
}
