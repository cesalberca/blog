<template>
  <div class="talk">
    <section>
      <p>
        <strong>{{ translations.title }}</strong>
      </p>
      <p>{{ detail.title }}</p>
    </section>
    <section>
      <p>
        <strong>{{ translations.abstract }}</strong>
      </p>
      <div v-html="detail.abstract"></div>
    </section>
    <section>
      <p>
        <strong>{{ translations.topics }}</strong>
      </p>
      <p>{{ detail.topics.map(topic => topic.value).join(', ') }}</p>
    </section>
    <section>
      <p>
        <strong>{{ translations.length }}</strong>
      </p>
      <p>{{ detail.length }}</p>
    </section>
    <section>
      <p>
        <strong>{{ translations.difficulty }}</strong>
      </p>
      <p>{{ translations.detailDifficulty }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TalkDetail } from './talk-detail'
import { Translate } from '../../components/translate'
import { Inject } from '../../../domain/types/inject'
import { TYPES } from '../../../types'

@Component({ name: 'x-talk' })
export default class XTalk extends Vue {
  @Prop({ type: Object })
  readonly detail!: TalkDetail

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get translations() {
    return {
      title: this.translate('talks_talkTitle'),
      abstract: this.translate('talks_talkAbstract'),
      topics: this.translate('talks_talkTopics'),
      length: this.translate('talks_talkLength'),
      difficulty: this.translate('talks_talkDifficulty'),
      // @ts-ignore For some reason difficulty is not inferred correctly, even though it exists
      detailDifficulty: this.translate(this.detail.difficulty)
    }
  }
}
</script>
<style scoped>
.talk > section {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.talk > section *:first-child {
}

.talk > section > *:last-child {
  margin-left: var(--medium-size);
}
</style>
