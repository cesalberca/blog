<template>
  <x-page>
    <h1>{{ title }}</h1>
    <markdown-component :body="description"></markdown-component>
  </x-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Translate } from '../../components/Translate'
import MarkdownComponent from '../../components/XMarkdown.vue'
import XPage from '../../components/XPage.vue'
import { State } from '../../../application/state/State'
import { Markdown } from '../../../domain/Markdown'
import { Inject } from '../../../inject'
import { TYPES } from '../../../types'

@Component({
  name: 'XAbout',
  components: {
    XPage,
    MarkdownComponent
  }
})
export default class XAbout extends Vue {
  @Inject(TYPES.STATE)
  readonly state!: State

  @Inject(TYPES.TRANSLATE)
  readonly translate!: Translate

  get title() {
    return this.translate('about_title')
  }

  get description() {
    return Markdown.fromValue(this.translate('about_description'))
  }
}
</script>
