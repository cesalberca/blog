export class Length {
  private constructor(private readonly _seconds: number) {}

  public static fromMinutes(minutes: number) {
    return new Length(minutes * 60)
  }

  get seconds(): number {
    return this._seconds
  }

  get minutes(): number {
    return this._seconds / 60
  }
}
