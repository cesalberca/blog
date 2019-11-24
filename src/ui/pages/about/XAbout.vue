<template>
  <x-page>
    <h1>{{ title }}</h1>
    <markdown-component :body="description"></markdown-component>
  </x-page>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Translate } from '../../commons/Translate'
import MarkdownComponent from '../../commons/XMarkdown.vue'
import XPage from '../../commons/XPage.vue'
import { State } from '../../../application/state/State'
import { Markdown } from '../../../domain/Markdown'

@Component({
  name: 'XAbout',
  components: {
    XPage,
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
