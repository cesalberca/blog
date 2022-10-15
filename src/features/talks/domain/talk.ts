import { Markdown } from '../../articles/domain/markdown'
import { Length } from '../../articles/domain/length'
import type { Difficulty } from './difficulty'
import { Topic } from './topic'
import { Reference } from './reference'
import { Id } from '../../articles/domain/id'
import { Event } from './event'
import type { Locale } from '../../../core/i18n/locale'

export class Talk {
  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly abstract: Markdown,
    public readonly length: Length,
    public readonly difficulty: Difficulty,
    // TODO: Use language
    public readonly language: Locale,
    public readonly topics: Topic[],
    public readonly references: Reference[],
    public readonly events: Event[],
  ) {}

  static create(talk: {
    id: Id
    title: string
    abstract: Markdown
    length: Length
    difficulty: Difficulty
    language: Locale
    topics: Topic[]
    references: Reference[]
    events: Event[]
  }) {
    return new Talk(
      talk.id,
      talk.title,
      talk.abstract,
      talk.length,
      talk.difficulty,
      talk.language,
      talk.topics,
      talk.references,
      talk.events,
    )
  }

  static fromJson(json: ReturnType<Talk['toJson']>) {
    return Talk.create({
      id: Id.fromValue(json.id),
      abstract: Markdown.fromValue(json.abstract),
      difficulty: json.difficulty,
      events: json.events.map(x => Event.fromJson(x)),
      language: json.language,
      topics: json.topics.map(x => Topic.fromValue(x)),
      length: Length.fromSeconds(json.length),
      title: json.title,
      references: json.references.map(x => Reference.fromValue(x)),
    })
  }

  toJson() {
    return {
      id: this.id.value,
      title: this.title,
      abstract: this.abstract.value,
      length: this.length.seconds,
      difficulty: this.difficulty,
      language: this.language,
      topics: this.topics.map(x => x.value),
      references: this.references.map(x => x.value),
      events: this.events.map(x => x.toJson()),
    }
  }
}
