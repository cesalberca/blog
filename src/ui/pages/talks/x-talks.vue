<template>
  <x-page>
    <h1>{{ title }}</h1>
    <x-talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </x-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import XTalk from './x-talk.vue'
import { TalkDetail } from './talk-detail'
import { Translate } from '../../components/translate'
import XPage from '../../components/x-page.vue'
import { TYPES } from '../../../types'
import { GetTalksGivenUseCase } from '../../../application/use-cases/get-talks-given-use-case'
import { Talk } from '../../../domain/talks/talk'
import { Inject } from '../../../inject'
import { Container } from '../../../container'
import { StateManager } from '../../../application/state/state-manager'

@Component<XTalks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = await Container.instance()
      .get<GetTalksGivenUseCase>(TYPES.GET_TALKS_GIVEN_USE_CASE)
      .execute()

    next(vm => {
      vm.talks = talks
    })
  },
  components: {
    XPage,
    XTalk
  }
})
export default class XTalks extends Vue {
  @Inject(TYPES.STATE_MANAGER)
  readonly stateManager!: StateManager

  @Inject(TYPES.TRANSLATE)
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
