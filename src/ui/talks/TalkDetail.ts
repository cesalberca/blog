import { Talk } from '../../domain/talks'
import { DifficultyTranslator } from './DifficultyTranslator'

export class TalkDetail {
  public static fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract.toHtml(),
      length: talk.length.minutes,
      difficulty: DifficultyTranslator.create().translate(talk.difficulty),
      language: talk.language,
      topics: talk.topics,
      references: talk.references
    }
  }
}
