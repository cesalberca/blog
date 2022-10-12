import { Datetime } from '../datetime'
import { Maybe } from '../utils/maybe'

export class Event {
  constructor(
    public readonly name: string,
    public readonly datetime: Datetime,
    public readonly slides: string,
    public readonly code: string,
    public readonly video: string,
    public readonly demo: Maybe<string>,
  ) {}

  static create(options: {
    name: string
    datetime: Datetime
    slides: string
    code: string
    video: string
    demo: Maybe<string>
  }) {
    return new Event(options.name, options.datetime, options.slides, options.code, options.video, options.demo)
  }
}
