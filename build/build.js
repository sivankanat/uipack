const _log = (data) => console.log(data);
const packageJson = require('../package.json');
const ver = "0.20.2";
const banner = "/*! UIPack " + packageJson.version + " | https://github.com/sivankanat/uipack#readme | MIT */";

const
  fs = require('fs'),
  ejs = require('ejs'),
  sass = require('node-sass'),
  postcss = require('postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sortmq = require('postcss-sort-media-queries'),
  rollup = require('rollup'),
  comonjs = require("@rollup/plugin-commonjs"),
  { babel } = require('@rollup/plugin-babel'),
  { nodeResolve } = require('@rollup/plugin-node-resolve'),
  { terser, minify } = require('terser')
  ;

const terserConf = {
  compress: {
    dead_code: true,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: false,
    keep_fargs: true,
    keep_fnames: false,
    keep_infinity: false
  },
  mangle: {
    eval: false,
    keep_classnames: false,
    keep_fnames: false,
    toplevel: false,
    safari10: false
  },
  module: false,
  sourceMap: false,
  output: {}
};

//ejs
/* fs.readdir('docs/ejs/pages', {}, function (err, files) {
  files.forEach(file => {
    // console.log(file);
    let filename = file.replace('.ejs', '.html');
    ejs.renderFile(`docs/ejs/pages/${file}`, {}, function (err, str) {
      err ? console.log(err) : fs.writeFileSync(`docs/${filename}`, str, () => true);
      console.log(`${filename} changed`)
    });
  })
}) */

//scss
sass.render({
  file: "src/scss/uipack.scss",
  outFile: "dist/css/uipack.css",
}, (err, result) => {
  if (err) console.log(err);
  else {
    postcss([autoprefixer, sortmq]).process(result.css, { from: null })
      .then(res => {
        fs.writeFile('dist/css/uipack.css', `${banner}\n${res.css}`, () => true)
        console.log(`uipack.css => ok`);
      })
    fs.readFile('dist/css/uipack.css', (err, css) => {
      postcss([cssnano]).process(css, { from: null }).then(result => {
        fs.writeFile('dist/css/uipack.min.css', result.css, () => true)
        console.log(`uipack.min.css => ok`);
      })
    })
  }
})

//js
async function renderJS() {
  const bundle = await rollup.rollup({
    input: 'src/js/uipack.js',
    plugins: [
      nodeResolve(),
      comonjs(),
      babel({
        babelHelpers: 'bundled'
      }),
    ]
  });
  await bundle.write({
    file: 'dist/js/uipack.js',
    format: "umd",
    amd: {
      id: "UIPack"
    },
    name: 'UIPack',
    banner: banner

  });
  await bundle.close();
  console.log(`uipack.js => ok`);

  const readCode = fs.readFileSync(`dist/js/uipack.js`, { encoding: 'utf8' });
  const minifyCode = await minify(readCode, terserConf);
  fs.writeFileSync(`dist/js/uipack.min.js`, minifyCode.code);
  console.log(`uipack.min.js => ok`);
}
renderJS();

