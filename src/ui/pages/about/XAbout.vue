<template>
  <div>
    <h1>{{ title }}</h1>
    <markdown-component :body="description"></markdown-component>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { State } from '../../../application/state'
import { Translate } from '../../commons/Translate'
import { Markdown } from '../../../domain'
import MarkdownComponent from '../../commons/XMarkdown.vue'

@Component({
  name: 'XAbout',
  components: {
    MarkdownComponent
  }
})
export default class XAbout extends Vue {
  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  get title() {
    return this.translate('about_title')
  }

  get description() {
    return Markdown.fromValue(this.translate('about_description'))
  }
}
</script>
