import type { Talk } from './talk'
import { Injectable } from '../../../core/dependency-injection/injectable'

@Injectable()
export class TalksOrderer {
  sort(talks: Talk[]): Talk[] {
    return talks.slice().sort((a, b) => {
      return (
        Date.parse(this.getLatestDateOfGivenTalk(b).datetime.toIso()) -
        Date.parse(this.getLatestDateOfGivenTalk(a).datetime.toIso())
      )
    })
  }

  private getLatestDateOfGivenTalk(talk: Talk) {
    return talk.events.slice().sort((a1, b1) => {
      return Date.parse(a1.datetime.toIso()) - Date.parse(b1.datetime.toIso())
    })[0]
  }
}
