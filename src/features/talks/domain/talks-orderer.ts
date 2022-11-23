import type { Talk } from './talk'
import type { Event } from './event'
import { Injectable } from '../../../core/dependency-injection/injectable'

@Injectable()
export class TalksOrderer {
  sort(talks: Talk[]): Talk[] {
    return talks.slice().sort((a, b) => {
      const eventA = this.getLatestEventOfGivenTalk(a)
      const eventB = this.getLatestEventOfGivenTalk(b)

      if (eventA === undefined) {
        return -1
      }

      if (eventB === undefined) {
        return -1
      }

      return Date.parse(eventB.datetime.toIso()) - Date.parse(eventA.datetime.toIso())
    })
  }

  private getLatestEventOfGivenTalk(talk: Talk): Event | undefined {
    if (talk.events.length === 0) {
      return undefined
    }

    return talk.events.slice().sort((a1, b1) => {
      return Date.parse(a1.datetime.toIso()) - Date.parse(b1.datetime.toIso())
    })[0]
  }
}
