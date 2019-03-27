<template>
  <div>
    <h1>{{ title }}</h1>
    <Talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService } from '../../application'
import { State } from '../state'
import { Talk } from '../../domain/talks'
import TalkComponent from './Talk.vue'
import { GetTalksGiven } from '../../application/GetTalksGiven'
import { TalkDetail } from './TalkDetail'

@Component<Talks>({
  async beforeRouteEnter(_to, _options, next) {
    const talks = await new GetTalksGiven().execute()

    next(vm => {
      vm.talks = talks
    })
  },
  components: {
    Talk: TalkComponent
  }
})
export default class Talks extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  talks: Talk[] = []

  talkDetail(talk: Talk) {
    return TalkDetail.fromTalk(talk)
  }

  get title() {
    return this.translationService.translate(this.state.locale, 'talks_title')
  }
}
</script>
