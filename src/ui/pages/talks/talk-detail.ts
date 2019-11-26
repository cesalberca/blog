import { DifficultyService } from '../../../domain/difficulty-service'
import { Talk } from '../../../domain/talks/Talk'

export class TalkDetail {
  static fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract.toHtml(),
      length: talk.length.minutes,
      difficulty: DifficultyService.create().toString(talk.difficulty),
      language: talk.language,
      topics: talk.topics,
      references: talk.references
    }
  }
}
