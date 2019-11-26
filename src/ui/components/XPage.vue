<template>
  <div>
    <div class="page">
      <div class="wrapper">
        <slot />
      </div>
    </div>
    <x-footer></x-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import XFooter from './XFooter.vue'
import { State } from '../../application/state/State'
import { InjectProp } from '../../inject'
import { TYPES } from '../../types'

@Component({
  name: 'XPage',
  components: {
    XFooter
  }
})
export default class XPage extends Vue {
  @InjectProp(TYPES.WINDOW)
  window!: Window

  @InjectProp(TYPES.STATE)
  state!: State

  @Watch('state.shouldReload')
  onShouldReloadChange() {
    if (this.state.shouldReload) {
      this.window.location.reload(true)
    }
  }
}
</script>

<style scoped>
.page {
  padding: var(--large-size) var(--medium-size) var(--medium-size);
  min-height: 100vh;
}

.wrapper {
  margin: 0 auto;
  max-width: var(--body-width);
}
</style>
