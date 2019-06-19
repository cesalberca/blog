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
import { Component, Vue } from 'vue-property-decorator'
import XFooter from './XFooter.vue'

@Component({
  name: 'XPage',
  components: {
    XFooter
  }
})
export default class XPage extends Vue {}
</script>

<style scoped>
.page {
  padding: var(--medium-size);
  min-height: 100vh;
}

.wrapper {
  margin: 0 auto;
  max-width: var(--body-width);
}
</style>
