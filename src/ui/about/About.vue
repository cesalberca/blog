<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { Injector } from '../index'
import { Page } from '../commons/'
import { Translate } from '../commons/Translate'
import { State } from '../../application/state'

@Component({
  components: {
    Page,
    Injector
  }
})
export default class About extends Vue {
  @Inject()
  readonly state!: State

  @Inject()
  readonly translate!: Translate

  get title() {
    return this.translate('about_title')
  }

  get description() {
    return this.translate('about_description')
  }
}
</script>
