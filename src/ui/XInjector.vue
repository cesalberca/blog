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
import { ServiceWorkerRegisterer } from './ServiceWorkerRegisterer'
import { container } from '../container'
import { TRANSLATION_SERVICE_TYPE, TRANSLATOR_TYPE, TWITTER_SHARER_SERVICE_TYPE } from '../types'

@Component({
  name: 'XInjector'
})
export default class XInjector extends Vue {
  @Provide()
  translationService = container.get<TranslationService>(TRANSLATION_SERVICE_TYPE)

  @Provide()
  twitterSharerService = container.get<TwitterSharerService>(TWITTER_SHARER_SERVICE_TYPE)

  @Provide()
  state = VueStateManager.instance.create(Vue, ServiceWorkerRegisterer.create()).state

  @Provide()
  window: Window = window

  @Provide()
  translate: Translate = key =>
    container
      .get<Translator>(TRANSLATOR_TYPE)
      .translations.get(VueStateManager.instance.state.locale)!
      .get(key)!
}
</script>
