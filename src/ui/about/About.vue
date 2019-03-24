<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { TranslationService } from '../../application/TranslationService'
import { Injector } from '../index'

@Component({
  components: {
    Injector
  }
})
export default class About extends Vue {
  @Inject()
  readonly translationService!: TranslationService

  get title() {
    return this.translationService.translate('about_title')
  }

  get description() {
    return this.translationService.translate('about_description')
  }
}
</script>
