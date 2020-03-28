import * as Mode from 'frontmatter-markdown-loader'

const path = require('path')

export default {
  mode: 'universal',
  srcDir: 'src/ui',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['./plugins/container-plugin.ts'],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'src/ui/content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      })
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  }
}
