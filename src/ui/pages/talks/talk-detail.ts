import { DifficultyService } from '../../../domain/talks/difficulty-service'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'
import { Translate } from '../../components/translate'
import { Injectable } from '../../../domain/types/injectable'

@Injectable()
export class TalkDetail {
  constructor(
    @Inject(TYPES.TRANSLATE) private readonly translate: Translate,
    @Inject(TYPES.DIFFICULTY_SERVICE) private readonly difficultyService: DifficultyService
  ) {}

  fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract.toHtml(),
      length: talk.length.minutes + ' ' + this.translate('talks_talkLengthMinutes'),
      difficulty: this.translate(this.difficultyService.toString(talk.difficulty)),
      language: talk.language,
      topics: talk.topics.map(topic => topic.value).join(', '),
      references: talk.references,
      events: talk.events.map(event => ({ ...event, datetime: event.datetime.format() }))
    }
  }
}
