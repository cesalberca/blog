<template>
  <div>
    <h2>{{ translations.title }} {{ detail.title }}</h2>
    <p>{{ translations.abstract }} {{ detail.abstract }}</p>
    <p>
      {{ translations.topics }}
      <span v-for="topic in detail.topics" :key="topic">{{ topic }}</span>
    </p>
    <p>{{ translations.length }} {{ detail.length }}</p>
    <p>{{ translations.difficulty }} {{ translations.detailDifficulty }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import { State } from '../state'
import { TranslationService } from '../../application'
import { TalkDetail } from './TalkDetail'

@Component
export default class Talk extends Vue {
  @Prop({ type: Object })
  readonly detail!: TalkDetail

  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  get translations() {
    return {
      title: this.translationService.translate(this.state.locale, 'talks_talkTitle'),
      abstract: this.translationService.translate(this.state.locale, 'talks_talkAbstract'),
      topics: this.translationService.translate(this.state.locale, 'talks_talkTopics'),
      length: this.translationService.translate(this.state.locale, 'talks_talkLength'),
      difficulty: this.translationService.translate(this.state.locale, 'talks_talkDifficulty'),
      // @ts-ignore For some reason difficulty is not inferred correctly, even though it exists
      detailDifficulty: this.translationService.translate(this.state.locale, this.detail.difficulty)
    }
  }
}
</script>
