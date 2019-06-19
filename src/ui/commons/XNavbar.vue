<template>
  <nav class="navbar">
    <x-links></x-links>
    <x-options class="options" />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { XOptions } from './index'
import XLinks from './XLinks.vue'

@Component({
  name: 'XNavbar',
  components: {
    XOptions,
    XLinks
  }
})
export default class XNavbar extends Vue {}
</script>
<style scoped>
.navbar {
  max-width: var(--body-width);
  margin: 0 auto var(--medium-size);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
