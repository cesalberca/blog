<template>
  <main>
    <x-injector>
      <x-theming class="full-height">
        <x-navbar />
        <router-view />
      </x-theming>
    </x-injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import XTheming from './theme/XTheming.vue'
import XInjector from './XInjector.vue'
import XNavbar from './commons/XNavbar.vue'

@Component({
  name: 'XApp',
  components: {
    XTheming,
    XInjector,
    XNavbar
  }
})
export default class XApp extends Vue {}
</script>
<style scoped>
.full-height {
  min-height: 100vh;
}
</style>
