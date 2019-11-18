import Vue from 'vue'
import { Application, Router, XApp } from './ui'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

new Application(Vue, Router.create(VueRouter), VueAnalytics).create(XApp)
