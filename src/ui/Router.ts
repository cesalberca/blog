import { VueRouter } from 'vue-router/types/router'

export class Router {
  public constructor(private readonly vueRouter: typeof VueRouter) {}

  public create() {
    return new this.vueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './home/Home.vue')
        },
        {
          path: '/articles',
          name: 'articles',
          component: () => import(/* webpackChunkName: "articles" */ './articles/Articles.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './about/About.vue')
        },
        {
          path: '/talks',
          name: 'talks',
          component: () => import(/* webpackChunkName: "talks" */ './talks/Talks.vue')
        }
      ]
    })
  }
}
