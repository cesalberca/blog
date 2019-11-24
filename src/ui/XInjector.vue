<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { Translate } from './commons/Translate'
import { TranslationService } from '../domain/TranslationService'
import { TwitterSharerService } from '../domain/TwitterSharerService'
import { EncoderService } from '../domain/EncoderService'
import { HtmlParserService } from '../domain/HtmlParserService'
import { State } from '../application/state/State'
import { VueStateManager } from './state/VueStateManager'
import { Translator } from '../domain/language/Translator'

@Component({
  name: 'XInjector'
})
export default class XInjector extends Vue {
  @Provide()
  translationService = new TranslationService(new Translator())

  @Provide()
  twitterSharerService = new TwitterSharerService(
    new EncoderService(),
    new HtmlParserService(),
    new TranslationService(new Translator())
  )

  @Provide()
  state = new State()

  @Provide()
  window: Window = window

  @Provide()
  translate: Translate = key =>
    new Translator().translations.get(VueStateManager.instance.state.locale)!.get(key)!
}
</script>
