<template>
  <div>
    <h1>{{ title }}</h1>
    <Talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService, UseCaseFactory } from '../../application'
import { State, VueStateManager } from '../state'
import { Talk } from '../../domain/talks'
import TalkComponent from './Talk.vue'
import { TalkDetail } from './TalkDetail'
import { UseCase } from '../../application/useCases/UseCase'
import { GetTalksGivenType } from '../../application/useCases/GetTalksGiven'

@Component<Talks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = (await UseCaseFactory.get(UseCase.GET_TALKS_GIVEN, {
      locale: VueStateManager.instance.state.locale
    }).execute()) as GetTalksGivenType

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
