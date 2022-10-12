import { Markdown } from '../markdown'
import { Length } from '../length'
import { Difficulty } from './difficulty'
import { Language } from './language'
import { Topic } from './topic'
import { Reference } from './reference'
import { Id } from '../id'
import { Event } from './event'

export class Talk {
  constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly abstract: Markdown,
    public readonly length: Length,
    public readonly difficulty: Difficulty,
    public readonly language: Language,
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
    language: Language
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
}
