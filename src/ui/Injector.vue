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
import { Translate } from './commons/Translate'

@Component
export default class Injector extends Vue {
  @Provide()
  translationService = TranslationService.create(Translator.create())

  @Provide()
  state = VueStateManager.instance.create(Vue).state

  @Provide()
  translate: Translate = key =>
    Translator.create()
      .translations.get(VueStateManager.instance.state.locale)!
      .get(key)!
}
</script>
