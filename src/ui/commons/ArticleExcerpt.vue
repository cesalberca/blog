<template>
  <div>
    <h3>{{ excerpt.title }}</h3>
    <span class="slugline">{{ excerpt.date }}</span>
    <p>{{ excerpt.body }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '../../domain/articles/Article'

@Component
export default class ArticleExcerpt extends Vue {
  @Prop()
  excerpt!: ReturnType<Article['getExcerpt']>
}
</script>

<style scoped>
.slugline {
  font-size: calc(var(--body-size) - 2);
  color: var(--gray-color);
}
</style>
