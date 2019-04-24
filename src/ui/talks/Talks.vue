<template>
  <div>
    <h1>{{ title }}</h1>
    <Talk v-for="talk in talks" :key="talk.id.value" :detail="talkDetail(talk)" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { VueStateManager } from '../state'
import { Talk } from '../../domain/talks'
import TalkComponent from './Talk.vue'
import { TalkDetail } from './TalkDetail'
import { GetTalksGiven } from '../../application/useCases'
import { Translate } from '../commons/Translate'
import { TranslationService } from '../../domain/TranslationService'
import { State } from '../../application/state'

@Component<Talks>({
  async beforeRouteEnter(_to, _from, next) {
    const talks = await GetTalksGiven.create({
      locale: VueStateManager.instance.state.locale
    }).execute()

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
