import { TalkDetail } from './talk-detail'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { customElement, LitElement, html } from 'lit-element'

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
    return html`<x-page>
      <h1>${this.title}</h1>
      <div v-for="talk in talks" :key="talk.id.value">
        <x-talk :detail="talkDetail.fromTalk(talk)" />
        <hr />
      </div>
    </x-page>`
  }
}
