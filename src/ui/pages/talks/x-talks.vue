<template>
  <x-page>
    <h1>{{ title }}</h1>
    <x-talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </x-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TalkComponent from './x-talk.vue'
import { TalkDetail } from './talk-detail'
import { Translate } from '../../components/translate'
import XPage from '../../components/x-page.vue'
import { TYPES } from '../../../types'
import { State } from '../../../application/state/state'
import { GetTalksGivenUseCase } from '../../../application/useCases/get-talks-given-use-case'
import { Talk } from '../../../domain/talks/Talk'
import { VueStateManager } from '../../state/vue-state-manager'
import { Inject } from '../../../inject'
import { Container } from '../../../container'

@Component<XTalks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = await Container.instance()
      .get<GetTalksGivenUseCase>(TYPES.GET_TALKS_GIVEN_USE_CASE)
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
  @Inject(TYPES.STATE)
  readonly state!: State

  @Inject(TYPES.TRANSLATION_SERVICE)
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
