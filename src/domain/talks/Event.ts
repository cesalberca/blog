import { Datetime } from '../../infraestructure/Datetime'

export class Event {
  private constructor(public readonly name: string, public readonly datetime: Datetime) {}

  public static create(options: { name: string; datetime: Datetime }) {
    return new Event(options.name, options.datetime)
  }
}
