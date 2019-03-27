import Vue from 'vue'
import { App, Application, Router } from './ui'
import { ServiceWorkerRegisterer } from './ui/ServiceWorkerRegisterer'
import VueRouter from 'vue-router'

new Application(
  Vue,
  Router.create(VueRouter),
  new ServiceWorkerRegisterer(window.console.log)
).bootstrap(App)
