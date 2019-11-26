import 'reflect-metadata'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import XApp from './ui/XApp.vue'
import { Router } from './ui/Router'
import { Application } from './ui/Application'
import { Container } from './Container'

Container.boostrap()
new Application(Vue, Router.create(VueRouter), VueAnalytics).create(XApp)
