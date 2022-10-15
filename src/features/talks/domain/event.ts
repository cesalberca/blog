import { Datetime } from '../../articles/domain/datetime'
import { Url } from './url'

export class Event {
  private constructor(
    public readonly name: string,
    public readonly datetime: Datetime,
    public readonly slides?: Url,
    public readonly code?: Url,
    public readonly video?: Url,
    public readonly demo?: Url,
  ) {}

  static create(options: { name: string; datetime: Datetime; slides?: Url; code?: Url; video?: Url; demo?: Url }) {
    return new Event(options.name, options.datetime, options.slides, options.code, options.video, options.demo)
  }

  toJson() {
    return {
      name: this.name,
      datetime: this.datetime.toString(),
      slides: this.slides?.value ?? null,
      code: this.code?.value ?? null,
      video: this.video?.value ?? null,
      demo: this.demo?.value ?? null,
    }
  }

  static fromJson(json: ReturnType<Event['toJson']>) {
    return Event.create({
      code: json.code !== null ? Url.fromValue(json.code) : undefined,
      video: json.video !== null ? Url.fromValue(json.video) : undefined,
      demo: json.demo !== null ? Url.fromValue(json.demo) : undefined,
      slides: json.slides !== null ? Url.fromValue(json.slides) : undefined,
      datetime: Datetime.fromString(json.datetime),
      name: json.name,
    })
  }
}
