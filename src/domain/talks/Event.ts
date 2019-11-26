import { Datetime } from '../datetime'

export class Event {
  constructor(public readonly name: string, public readonly datetime: Datetime) {}

  static create(options: { name: string; datetime: Datetime }) {
    return new Event(options.name, options.datetime)
  }
}
