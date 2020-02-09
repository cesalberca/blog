<template>
  <div>
    <h1>Create a frontmatter Markdown powered Blog with Nuxt.JS</h1>
    <component :is="singlePostComponent" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: '_slug',
  async asyncData({ params }) {
    try {
      const url = `/../../content/${params.slug}.md`
      const post = await import(url)
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      }
    } catch (err) {
      return false
    }
  }
})
export default class Slug extends Vue {}
</script>
