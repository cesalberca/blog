import type { Talk } from '../../../domain/talks/talk'
import { Injectable } from '../../../domain/types/injectable'

@Injectable()
export class TalkDetail {
  fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract.toHtml(),
      length: talk.length.minutes,
      difficulty: talk.difficulty,
      language: talk.language,
      topics: talk.topics.map(topic => topic.value).join(', '),
      references: talk.references,
      events: talk.events.map(event => ({ ...event, datetime: event.datetime.format() })),
    }
  }
}
