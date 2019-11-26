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
import XLinks from './x-links.vue'
import XOptions from './x-options.vue'

@Component({
  name: 'x-navbar',
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
  background-color: var(--navbar-background, var(--primary-color));
  padding: 0 var(--medium-size);
  position: var(--navbar-position, initial);
  width: 100%;
  text-shadow: var(--navbar-text-shadow);
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
  }
}
</style>
