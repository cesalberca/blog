module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup', 'typescript'],
        theme: 'default',
        css: true
      }
    ]
  ]
}
