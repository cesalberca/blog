import { css, customElement, html, LitElement, property } from '/web_modules/lit-element.js'
import { Translation } from '../../components/translation.js'
import { TYPES } from '../../../types.js'
import { TalkDetail } from './talk-detail.js'
import { Inject } from '../../../domain/types/inject.js'

@customElement('app-talk')
export class Talk extends LitElement {
  @property({ type: Object })
  readonly detail!: ReturnType<TalkDetail['fromTalk']>

  @Inject(TYPES.TRANSLATION)
  readonly translation!: Translation

  get translations() {
    return {
      title: this.translation('talks_talkTitle'),
      events: this.translation('talks_event'),
      abstract: this.translation('talks_talkAbstract'),
      topics: this.translation('talks_talkTopics'),
      length: this.translation('talks_talkLength'),
      slides: this.translation('talks_talkSlides'),
      demo: this.translation('talks_talkDemo'),
      code: this.translation('talks_talkCode'),
      video: this.translation('talks_talkVideo'),
      difficulty: this.translation('talks_talkDifficulty')
    }
  }

  static get styles() {
    return css`
      .links > * {
        margin-right: var(--small-size);
      }
    `
  }

  render() {
    return html`<div class="talk">
      <app-talk-section .title="${this.translations.title}" .description="${this.detail.title}" />
      <app-talk-section .title="${this.translations.abstract}"
        ><app-markdown .body="${this.detail.abstract}"></app-markdown
      ></app-talk-section>
      <app-talk-section .title="${this.translations.topics}" .description="${this.detail.topics}" />
      <app-talk-section .title="${this.translations.length}" .description="${this.detail.length}" />
      <app-talk-section
        .title="${this.translations.difficulty}"
        .description="${this.detail.difficulty}"
      />
      ${this.detail.events.length &&
      html`<app-talk-section .title="${this.translations.events}">
        ${this.detail.events.map(
          event => html`<div>
            <p>${event.name} – <small>${event.datetime}</small></p>
            <div class="links">
              <app-link .to="${event.slides}" .external="true"
                >${this.translations.slides}</app-link
              >
              <app-link .to="${event.code}" .external="true">${this.translations.code}</app-link>
              <app-link v-if="event.demo.has()" .to="${event.demo.getOrElse('')}" .external="true"
                >${this.translations.demo}</app-link
              >
              <app-link v-if="event.video" .to="event.video" .external="true"
                >${this.translations.video}</app-link
              >
            </div>
          </div>`
        )}
      </app-talk-section>`}
    </div>`
  }
}
