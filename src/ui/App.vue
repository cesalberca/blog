<template>
  <main>
    <Injector>
      <Theming class="full-height">
        <Navbar />
        <Page>
          <router-view />
        </Page>
      </Theming>
    </Injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Navbar } from './commons'
import { Injector } from './'
import Page from './commons/Page.vue'
import { Theming } from './theme'

@Component({
  components: {
    Page,
    Injector,
    Navbar,
    Theming
  }
})
export default class App extends Vue {}
</script>
<style scoped>
.full-height {
  min-height: 100vh;
}
</style>
