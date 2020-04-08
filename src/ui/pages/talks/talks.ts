import { TalkDetail } from './talk-detail.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { Talk } from '../../../domain/talks/talk.js'
import { Inject } from '../../../domain/types/inject.js'
import { StateManager } from '../../../application/state/state-manager.js'
import { customElement, LitElement, html } from '/web_modules/lit-element.js'
import { GetTalksGivenUseCase } from '../../../application/use-cases/get-talks-given-use-case.js'

@customElement('app-talks')
export class Talks extends LitElement {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.TALK_DETAIL)
  readonly talkDetail!: TalkDetail

  @Inject(TYPES.GET_TALKS_GIVEN_USE_CASE)
  readonly getTalksGivenUseCase!: GetTalksGivenUseCase

  talks: Talk[] = []

  async connectedCallback(): Promise<void> {
    super.connectedCallback()
    this.talks = await this.getTalksGivenUseCase.execute()
  }

  get title() {
    return this.translation('talks_title')
  }

  render() {
    return html`<app-page>
      <h1>${this.title}</h1>
      ${this.talks.map(
        talk => html`<div>
          <app-talk .detail="${this.talkDetail.fromTalk(talk)}"></app-talk>
          <hr />
        </div>`
      )}
    </app-page>`
  }
}
