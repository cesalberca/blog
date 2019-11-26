import 'reflect-metadata'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import XApp from './ui/x-app.vue'
import { Router } from './ui/router'
import { Application } from './ui/application'
import { Container } from './container'

Container.boostrap()
new Application(Vue, Router.create(VueRouter), VueAnalytics).create(XApp)
