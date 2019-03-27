<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { VueStateManager } from './state'
import { TranslationService, UseCaseFactory } from '../application'
import { Article } from '../domain/articles'

@Component
export default class Injector extends Vue {
  @Provide()
  getArticles = UseCaseFactory.get('GetArticles')

  @Provide()
  getRecentArticles = UseCaseFactory.get<Article[]>('GetRecentArticles')

  @Provide()
  translationService = new TranslationService()

  @Provide()
  state = new VueStateManager(Vue).state
}
</script>
