<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { GetArticle, GetArticles, GetRecentArticles, TranslationService } from '../application'
import { VueStateManager } from './state/VueStateManager'

@Component
export default class Injector extends Vue {
  @Provide()
  getArticle = new GetArticle()

  @Provide()
  getArticles = new GetArticles()

  @Provide()
  getRecentArticles = new GetRecentArticles()

  @Provide()
  translationService = new TranslationService()

  @Provide()
  state = new VueStateManager(Vue).state
}
</script>
