<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { VueStateManager } from './state'
import { TranslationService } from '../application'
import { ThemeService } from './theme/ThemeService'

@Component
export default class Injector extends Vue {
  @Provide()
  translationService = new TranslationService()

  @Provide()
  themeService = new ThemeService()

  @Provide()
  state = VueStateManager.instance.create(Vue).state
}
</script>
