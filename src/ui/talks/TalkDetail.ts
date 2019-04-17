import { Talk } from '../../domain/talks'
import { DifficultyService } from '../../application/DifficultyService'

export class TalkDetail {
  public static fromTalk(talk: Talk) {
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
