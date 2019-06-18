<template>
  <div>
    <h1>{{ title }}</h1>
    <MarkdownComponent :body="description"></MarkdownComponent>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Translate } from '../commons/Translate'
import { State } from '../../application/state'
import MarkdownComponent from '../commons/XMarkdown.vue'
import { Markdown } from '../../domain'

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
