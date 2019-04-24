import { Markdown } from '../Markdown'
import { Length } from '../Length'
import { Difficulty } from './Difficulty'
import { Language } from './Language'
import { Topic } from './Topic'
import { Reference } from './Reference'
import { Id } from '../Id'

export class Talk {
  private constructor(
    public readonly id: Id,
    public readonly title: string,
    public readonly abstract: Markdown,
    public readonly length: Length,
    public readonly difficulty: Difficulty,
    public readonly language: Language,
    public readonly topics: Topic[],
    public readonly references: Reference[]
  ) {}

  public static create(talk: {
    id: Id
    title: string
    abstract: Markdown
    length: Length
    difficulty: Difficulty
    language: Language
    topics: Topic[]
    references: Reference[]
  }) {
    return new Talk(
      talk.id,
      talk.title,
      talk.abstract,
      talk.length,
      talk.difficulty,
      talk.language,
      talk.topics,
      talk.references
    )
  }
}
