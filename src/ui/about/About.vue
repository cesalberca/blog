<template>
  <Injector>
    <Page>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </Page>
  </Injector>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService } from '../../application'
import { Injector } from '../index'
import { Page } from '../commons/'
import { State } from '../state'

@Component({
  components: {
    Page,
    Injector
  }
})
export default class About extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  @Inject()
  readonly state!: State

  get title() {
    return this.translationService.translate(this.state.locale, 'about_title')
  }

  get description() {
    return this.translationService.translate(this.state.locale, 'about_description')
  }
}
</script>
