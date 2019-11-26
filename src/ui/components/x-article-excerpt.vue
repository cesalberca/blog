<template>
  <x-link class="excerpt" tabindex="0" @click="onAction" @keydown.enter="onAction">
    <h3>{{ excerpt.title }}</h3>
    <div class="slugline">
      <span>{{ excerpt.date }}</span>
      <span class="accented-slugline"> / </span>
      <span>{{ excerpt.readingTime.minutes }} {{ minutes }}</span>
    </div>
    <p v-html="excerpt.body"></p>
  </x-link>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import XLink from './x-link.vue'
import { Translate } from './translate'
import { Article } from '../../domain/articles/article'
import { TYPES } from '../../types'
import { Inject } from '../../inject'

@Component({
  name: 'x-article-excerpt',
  components: { XLink }
})
export default class XArticleExcerpt extends Vue {
  @Prop()
  excerpt!: ReturnType<Article['getExcerpt']>

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  @Emit()
  onAction() {
    return this.excerpt.id
  }

  get minutes() {
    return this.translate('_minutes')
  }
}
</script>

<style scoped>
.excerpt {
  display: block;
}

.excerpt:after {
  content: none;
}

.excerpt:hover {
  color: inherit;
  cursor: pointer;
}

.slugline {
  font-size: calc(var(--body-text) - 2);
  color: var(--gray-color);
}

.accented-slugline {
  color: var(--primary-color);
}
</style>
