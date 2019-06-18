<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { VueStateManager } from './state'
import { Translator } from '../domain/language'
import { Translate } from './commons/Translate'
import { TranslationService } from '../domain/TranslationService'
import { TwitterSharerService } from '../domain/TwitterSharerService'

@Component({
  name: 'XInjector'
})
export default class XInjector extends Vue {
  @Provide()
  translationService = TranslationService.create(Translator.create())

  @Provide()
  twitterSharerService = TwitterSharerService.create()

  @Provide()
  state = VueStateManager.instance.create(Vue).state

  @Provide()
  window: Window = window

  @Provide()
  translate: Translate = key =>
    Translator.create()
      .translations.get(VueStateManager.instance.state.locale)!
      .get(key)!
}
</script>
