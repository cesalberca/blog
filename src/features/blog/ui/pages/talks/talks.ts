import { TalkDetail } from './talk-detail'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../domain/types/inject'
import { customElement, html, LitElement } from 'lit-element'
import { GetTalksGivenUseCase } from '../../../application/use-cases/get-talks-given-use-case'
import { Store } from '../../../application/state/store'
import { subscribe } from '../../subscribe'
import { general } from '../../general'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

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
              </div>`,
            ),
          ),
        ),
      )}
    </app-page>`
  }
}
