<template>
  <Injector>
    <Page>
      <h1>{{ title }}</h1>
    </Page>
  </Injector>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Injector } from '..'
import { Page } from '../commons'
import { TranslationService } from '../../application/TranslationService'
import { State } from '../state/State'

@Component({
  components: {
    Page,
    Injector
  }
})
export default class Talks extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  get title() {
    return this.translationService.translate(this.state.locale, 'talks_title')
  }
}
</script>
