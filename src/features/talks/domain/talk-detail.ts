import type { Talk } from './talk'
import { Injectable } from '../../../core/dependency-injection/injectable'

@Injectable()
export class TalkDetail {
  fromTalk(talk: Talk) {
    return {
      id: talk.id,
      title: talk.title,
      abstract: talk.abstract,
      length: talk.length.minutes,
      difficulty: talk.difficulty,
      language: talk.language,
      topics: talk.topics,
      image: talk.image,
      events: talk.events.map(event => ({ ...event, datetime: event.datetime.format() })),
    }
  }
}
