import { css, customElement, html, LitElement, property } from 'lit-element'
import { Translation } from '../../components/translation'
import { TYPES } from '../../../types'
import { Inject } from 'inversify-props'
import { TalkDetail } from './talk-detail'

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
    return html` <div class="talk">
      <app-talk-section :title="translations.title" :description="detail.title" />
      <app-talk-section :title="translations.abstract"
        ><div v-html="detail.abstract"></div
      ></app-talk-section>
      <app-talk-section :title="translations.topics" :description="detail.topics" />
      <app-talk-section :title="translations.length" :description="detail.length" />
      <app-talk-section :title="translations.difficulty" :description="detail.difficulty" />
      <app-talk-section v-if="detail.events.length" :title="translations.events">
        <div v-for="event in detail.events" :key="event.name">
          <p>{{ event.name }} – <small>{{ event.datetime }}</small></p>
          <div class="links">
            <app-link :to="event.slides" :external="true">{{ translations.slides }}</app-link>
            <app-link :to="event.code" :external="true">{{ translations.code }}</app-link>
            <app-link v-if="event.demo.has()" :to="event.demo.getOrElse('')" :external="true"
              >{{ translations.demo }}</app-link
            >
            <app-link v-if="event.video" :to="event.video" :external="true"
              >{{ translations.video }}</app-link
            >
          </div>
        </div>
      </app-talk-section>
    </div>`
  }
}
