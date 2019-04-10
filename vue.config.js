const path = require('path')

module.exports = {
  publicPath: 'blog',
  outputDir: path.resolve(__dirname, './docs'),
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }

    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader'
    })
  }
}
