import { css, customElement, LitElement } from 'lit-element'
import { Translate } from '../../components/translate'
import { TYPES } from '../../../types'
import { Inject } from 'inversify-props'
import { TalkDetail } from './talk-detail'

@customElement('x-talk')
export default class XTalk extends LitElement {
  @Prop({ type: Object })
  readonly detail!: ReturnType<TalkDetail['fromTalk']>

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get translations() {
    return {
      title: this.translate('talks_talkTitle'),
      events: this.translate('talks_event'),
      abstract: this.translate('talks_talkAbstract'),
      topics: this.translate('talks_talkTopics'),
      length: this.translate('talks_talkLength'),
      slides: this.translate('talks_talkSlides'),
      demo: this.translate('talks_talkDemo'),
      code: this.translate('talks_talkCode'),
      video: this.translate('talks_talkVideo'),
      difficulty: this.translate('talks_talkDifficulty')
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
      <x-talk-section :title="translations.title" :description="detail.title" />
      <x-talk-section :title="translations.abstract"
        ><div v-html="detail.abstract"></div
      ></x-talk-section>
      <x-talk-section :title="translations.topics" :description="detail.topics" />
      <x-talk-section :title="translations.length" :description="detail.length" />
      <x-talk-section :title="translations.difficulty" :description="detail.difficulty" />
      <x-talk-section v-if="detail.events.length" :title="translations.events">
        <div v-for="event in detail.events" :key="event.name">
          <p>{{ event.name }} – <small>{{ event.datetime }}</small></p>
          <div class="links">
            <x-link :to="event.slides" :external="true">{{ translations.slides }}</x-link>
            <x-link :to="event.code" :external="true">{{ translations.code }}</x-link>
            <x-link v-if="event.demo.has()" :to="event.demo.getOrElse('')" :external="true"
              >{{ translations.demo }}</x-link
            >
            <x-link v-if="event.video" :to="event.video" :external="true"
              >{{ translations.video }}</x-link
            >
          </div>
        </div>
      </x-talk-section>
    </div>`
  }
}
