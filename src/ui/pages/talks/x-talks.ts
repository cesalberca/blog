import { TalkDetail } from './talk-detail'
import { Translate } from '../../components/translate'
import { TYPES } from '../../../types'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { StateManager } from '../../../application/state/state-manager'
import { customElement, LitElement } from 'lit-element'

@customElement('x-talks')
export class XTalks extends LitElement {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  @Inject(TYPES.TALK_DETAIL)
  readonly talkDetail!: TalkDetail

  talks: Talk[] = []

  get title() {
    return this.translate('talks_title')
  }

  render() {
    return html`<x-page>
      <h1>{{ title }}</h1>
      <div v-for="talk in talks" :key="talk.id.value">
        <x-talk :detail="talkDetail.fromTalk(talk)" />
        <hr />
      </div>
    </x-page>`
  }
}
