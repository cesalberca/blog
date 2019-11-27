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
import XFooter from './x-footer.vue'
import { Inject } from '../../inject'
import { TYPES } from '../../types'
import { StateManager } from '../../application/state/state-manager'

@Component({
  name: 'x-page',
  components: {
    XFooter
  }
})
export default class XPage extends Vue {
  @Inject(TYPES.WINDOW)
  window!: Window

  @Inject(TYPES.STATE_MANAGER)
  stateManager!: StateManager

  @Watch('stateManager.state.shouldReload')
  onShouldReloadChange() {
    if (this.stateManager.state.shouldReload) {
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
