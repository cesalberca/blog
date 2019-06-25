<template>
  <nav class="navbar">
    <div class="wrapper">
      <x-links class="links"></x-links>
      <x-options class="options" />
    </div>
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
  --link-color: var(--white-color);
  background-color: var(--primary-color);
}

.wrapper {
  margin: 0 auto;
  padding: var(--small-size) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--body-width);
}

@media (max-width: 768px) {
  .links {
    display: none;
  }
}
</style>
