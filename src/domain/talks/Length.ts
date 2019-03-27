export class Length {
  private constructor(private readonly seconds: number) {}

  public static fromMinutes(minutes: number) {
    return new Length(minutes * 60)
  }

  get minutes(): number {
    return this.seconds / 60
  }
}
