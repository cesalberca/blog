<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { VueStateManager } from './state'
import { TranslationService } from '../application'
import { Translator } from '../infraestructure/language'

@Component
export default class Injector extends Vue {
  @Provide()
  translationService = TranslationService.create(Translator.create())

  @Provide()
  state = VueStateManager.instance.create(Vue).state
}
</script>
