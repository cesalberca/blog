import Router from 'vue-router'

export const router = new Router({
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
    }
  ]
})
