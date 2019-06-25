import Vue from 'vue'
import { Application, Router, XApp } from './ui'
import VueRouter from 'vue-router'

new Application(Vue, Router.create(VueRouter)).create(XApp)
