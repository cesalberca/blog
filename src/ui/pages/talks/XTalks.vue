<template>
  <x-page>
    <h1>{{ title }}</h1>
    <x-talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </x-page>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import TalkComponent from './XTalk.vue'
import { TalkDetail } from './TalkDetail'
import { TranslationService } from '../../../domain/TranslationService'
import { State } from '../../../application/state'
import { GetTalksGivenUseCase } from '../../../application/useCases'
import { Talk } from '../../../domain/talks'
import { Translate } from '../../commons/Translate'
import { VueStateManager } from '../../state'
import XPage from '../../commons/XPage.vue'
import { ContainerFactory } from '../../../ContainerFactory'
import { GET_TALKS_GIVEN_USE_CASE_TYPE } from '../../../types'

@Component<XTalks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = await ContainerFactory.get()
      .container.get<GetTalksGivenUseCase>(GET_TALKS_GIVEN_USE_CASE_TYPE)
      .execute({ locale: VueStateManager.instance.state.locale })

    next(vm => {
      vm.talks = talks
    })
  },
  components: {
    XPage,
    XTalk: TalkComponent
  }
})
export default class XTalks extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  talks: Talk[] = []

  talkDetail(talk: Talk) {
    return TalkDetail.fromTalk(talk)
  }

  get title() {
    return this.translate('talks_title')
  }
}
</script>
