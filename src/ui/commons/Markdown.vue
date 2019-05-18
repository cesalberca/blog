<template>
  <div v-html="html"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Markdown } from '../../domain'
import Prism from 'prismjs'

@Component({ name: 'Markdown' })
export default class MarkdownComponent extends Vue {
  @Prop({ type: Object, required: true })
  body!: Markdown

  get html() {
    return this.body.toHtml()
  }

  highlight() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  }

  @Watch('body', { immediate: true })
  onBodyChange() {
    this.highlight()
  }
}
</script>
