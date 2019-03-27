<template>
  <main>
    <Injector>
      <Navbar />
      <Options />
      <Page>
        <router-view />
      </Page>
    </Injector>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Navbar, Options } from './commons'
import { Injector } from './'
import Page from './commons/Page.vue'

@Component({
  components: {
    Page,
    Options,
    Injector,
    Navbar
  }
})
export default class App extends Vue {}
</script>
