<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import { TranslationService } from '../application/TranslationService'
import { GetArticleCommand } from '../application/GetArticleCommand'

@Component
export default class Injector extends Vue {
  @Provide()
  getArticle = new GetArticleCommand()

  @Provide()
  translationService = new TranslationService('en')
}
</script>
