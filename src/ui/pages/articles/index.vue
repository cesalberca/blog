<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link to="getPermalink(post)">Hi</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Articles',
  async asyncData() {
    // @ts-ignore
    const resolve = require.context('~/content/', true, /\.md$/)
    const imports = resolve.keys().map((key: string) => {
      return resolve(key)
    })
    return {
      posts: imports
    }
  }
})
export default class Articles extends Vue {
  prefix = 'posts'

  getPermalink(post: any) {
    return `${this.prefix}/${
      post.meta.resourcePath
        .split('\\')
        .pop()
        .split('/')
        .pop()
        .split('.')[0]
    }`
  }
}
</script>

<style scoped lang="scss"></style>
