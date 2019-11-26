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
import { Translate } from '../../components/Translate'
import XPage from '../../components/XPage.vue'
import { ContainerFactory } from '../../../ContainerFactory'
import { TYPES } from '../../../types'
import { State } from '../../../application/state/State'
import { GetTalksGivenUseCase } from '../../../application/useCases/GetTalksGivenUseCase'
import { Talk } from '../../../domain/talks/Talk'
import { VueStateManager } from '../../state/VueStateManager'

@Component<XTalks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = await ContainerFactory.get()
      .container.get<GetTalksGivenUseCase>(TYPES.GET_TALKS_GIVEN_USE_CASE_TYPE)
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
