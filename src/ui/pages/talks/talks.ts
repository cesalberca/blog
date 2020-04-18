import { TalkDetail } from './talk-detail.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { Talk } from '../../../domain/talks/talk.js'
import { Inject } from '../../../domain/types/inject.js'
import { customElement, html, LitElement } from '/web_modules/lit-element.js'
import { GetTalksGivenUseCase } from '../../../application/use-cases/get-talks-given-use-case.js'
import { Store } from '../../../application/state/store.js'
import { subscribe } from '../../subscribe.js'
import { general } from '../../styles/general.js'
import { Observable } from '/web_modules/rxjs.js'
import { map } from '/web_modules/rxjs/operators.js'

@customElement('app-talks')
export class Talks extends LitElement {
  @Inject(TYPES.STORE)
  readonly state!: Store

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  @Inject(TYPES.TALK_DETAIL)
  readonly talkDetail!: TalkDetail

  @Inject(TYPES.GET_TALKS_GIVEN_USE_CASE)
  readonly getTalksGivenUseCase!: GetTalksGivenUseCase

  talks: Observable<Talk[]> = this.getTalksGivenUseCase.execute()

  static get styles() {
    return [general]
  }

  get talksTitle() {
    return this.translation('talks_title')
  }

  render() {
    return html`<app-page>
      <h1>${subscribe(this.talksTitle)}</h1>
      ${subscribe(
        this.talks.pipe(
          map(talks =>
            talks.map(
              talk => html`<div>
                <app-talk .detail="${this.talkDetail.fromTalk(talk)}"></app-talk>
                <hr />
              </div>`
            )
          )
        )
      )}
    </app-page>`
  }
}
