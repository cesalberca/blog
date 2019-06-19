<template>
  <main>
    <x-injector>
      <x-theming class="full-height">
        <x-navbar />
        <x-page>
          <router-view />
        </x-page>
      </x-theming>
    </x-injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { XNavbar } from './commons'
import { XInjector } from './'
import XPage from './commons/XPage.vue'
import XTheming from './theme/XTheming.vue'

@Component({
  name: 'XApp',
  components: {
    XTheming,
    XPage,
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
