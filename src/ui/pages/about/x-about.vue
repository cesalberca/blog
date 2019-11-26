<template>
  <x-page>
    <h1>{{ title }}</h1>
    <markdown-component :body="description"></markdown-component>
  </x-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Translate } from '../../components/translate'
import MarkdownComponent from '../../components/x-markdown.vue'
import XPage from '../../components/x-page.vue'
import { State } from '../../../application/state/state'
import { Markdown } from '../../../domain/markdown'
import { Inject } from '../../../inject'
import { TYPES } from '../../../types'

@Component({
  name: 'x-about',
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
