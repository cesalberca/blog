import { TalkDetail } from './talk-detail'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { customElement, LitElement, html } from '/web_modules/lit-element.js'

@customElement('app-talks')
export class Talks extends LitElement {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.TALK_DETAIL)
  readonly talkDetail!: TalkDetail

  talks: Talk[] = []

  get title() {
    return this.translation('talks_title')
  }

  render() {
    return html`<app-page>
      <h1>${this.title}</h1>
      <div v-for="talk in talks" :key="talk.id.value">
        <app-talk :detail="talkDetail.fromTalk(talk)"></app-talk>
        <hr />
      </div>
    </app-page>`
  }
}
