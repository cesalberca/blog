<template>
  <div>
    <h1>Article</h1>
    <div v-html="article.body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Article extends Vue {}
</script>
