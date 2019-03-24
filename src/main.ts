import Vue from 'vue'
import { App, Application, router } from './ui'
import { ServiceWorkerRegisterer } from './ui/ServiceWorkerRegisterer'

new Application(Vue, router, new ServiceWorkerRegisterer(window.console.log)).bootstrap(App)
