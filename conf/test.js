const
  fs = require('fs'),
  sass = require('node-sass'),
  postcss = require('postcss'),
  autoprefixer = require('autoprefixer'),
  path = require('path'),
  cssnano = require('cssnano')
  ;
const file_basename = 'uipack';
var css_result = sass.renderSync({
  file: path.resolve(__dirname, '../src/scss/' + file_basename + '.scss'),
  sourceMap: false
})

postcss([autoprefixer, cssnano]).process(css_result.css).then(result => {
  fs.writeFile(path.resolve(__dirname, '../dist/css/' + file_basename + '.min.css'), result, () => true)
})