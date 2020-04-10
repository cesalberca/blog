const imagemin = require('imagemin-dir')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminOptipng = require('imagemin-optipng')
const imageminGifsicle = require('imagemin-gifsicle')

;(async () => {
  const files = await imagemin(['src/**/*.{jpg,png,jpeg,svg,gif}'], {
    destination: 'dist',
    plugins: [imageminGifsicle(), imageminMozjpeg(), imageminOptipng()]
  })

  console.log(`Optimized ${files.length} images`)
})()
