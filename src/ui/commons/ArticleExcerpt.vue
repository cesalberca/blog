<template>
  <a class="excerpt" tabindex="0" @click="onAction" @keydown.enter="onAction">
    <h3>{{ excerpt.title }}</h3>
    <span class="slugline">{{ excerpt.date }}</span>
    <p v-html="excerpt.body"></p>
  </a>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Article } from '../../domain/articles'

@Component
export default class ArticleExcerpt extends Vue {
  @Prop()
  excerpt!: ReturnType<Article['getExcerpt']>

  @Emit()
  onAction() {
    return this.excerpt.id
  }
}
</script>

<style scoped>
.excerpt {
  display: block;
}

.excerpt:hover {
  cursor: pointer;
}

.slugline {
  font-size: calc(var(--body-size) - 2);
  color: var(--gray-color);
}
</style>
