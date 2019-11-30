const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
              optimizationLevel: 9
            },
            jpegtran: {
              progressive: true
            },
            gifsicle: {
              optimizationLevel: 7
            }
          })
        ]
      }
    }
  }
}
