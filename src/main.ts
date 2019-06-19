import Vue from 'vue'
import { XApp, Application, Router } from './ui'
import { ServiceWorkerRegisterer } from './ui/ServiceWorkerRegisterer'
import VueRouter from 'vue-router'

new Application(
  Vue,
  Router.create(VueRouter),
  new ServiceWorkerRegisterer(window.console.log)
).bootstrap(XApp)
