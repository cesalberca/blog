import { Inject } from '../domain/types/inject'
import { TYPES } from '../types'
import VueRouter from 'vue-router'
import { Injectable } from '../domain/types/injectable'

@Injectable()
export class Router {
  readonly value: VueRouter

  constructor(@Inject(TYPES.VUE_ROUTER) private readonly vueRouter: typeof VueRouter) {
    this.value = new this.vueRouter({
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './pages/home/x-home.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: () =>
            import(/* webpackChunkName: "articles" */ './pages/articles/x-articles.vue')
        },
        {
          path: '/article/:id',
          name: 'article',
          component: () =>
            import(/* webpackChunkName: "article" */ './pages/articles/x-article.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './pages/about/x-about.vue')
        },
        {
          path: '/talks',
          name: 'talks',
          component: () => import(/* webpackChunkName: "talks" */ './pages/talks/x-talks.vue')
        }
      ]
    })
  }
}
