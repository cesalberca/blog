import { DifficultyService } from '../../../domain/talks/difficulty-service'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { Translation } from '../../components/translation'
import { Injectable } from '../../../domain/types/injectable'

@Injectable()
export class TalkDetail {
  constructor(
    @Inject(TYPES.TRANSLATION) private readonly translation: Translation,
    @Inject(TYPES.DIFFICULTY_SERVICE) private readonly difficultyService: DifficultyService,
  ) {}

  fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract.toHtml(),
      length: talk.length.minutes,
      difficulty: this.translation(this.difficultyService.toString(talk.difficulty)),
      language: talk.language,
      topics: talk.topics.map(topic => topic.value).join(', '),
      references: talk.references,
      events: talk.events.map(event => ({ ...event, datetime: event.datetime.format() })),
    }
  }
}
