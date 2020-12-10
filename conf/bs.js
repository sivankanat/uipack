const
  bs = require('browser-sync').create(),
  pug = require('pug'),
  fs = require('fs'),
  path = require('path'),
  sass = require('node-sass'),
  postcss = require('postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  rollup = require('rollup'),
  comonjs = require("@rollup/plugin-commonjs"),
  { babel } = require('@rollup/plugin-babel'),
  pjson = require("../package.json")
  ;

const file_basename = 'uipack';
var sass_input = path.resolve(__dirname, '../src/scss/' + file_basename + '.scss');
var sass_output = path.resolve(__dirname, '../dist/css');

bs.watch("src/js/**/*.js", async function (event, file) {
  if (event == 'change') {
    const bundle = await rollup.rollup({
      input: 'src/js/' + file_basename + '.js',
      plugins: [
        babel({
          babelHelpers: "runtime"
        }),
        comonjs()
      ]
    });
    await bundle.write({
      file: 'dist/js/' + file_basename + '.js',
      format: "umd",
      amd: {
        id: "UIPack"
      },
      banner: "/*! UIPack " + pjson.version + " | https://github.com/sivankanat/uipack#readme | MIT */",
      name: file_basename
    });
  }
})

bs.init({
  files: [
    'scenarios/**/*.pug',
    'dist/css/**/*.css',
    'dist/js/**/*.js',
  ],
  ui: false,
  port: 8000,
  reloadDelay: 800,
  reloadDebounce: 800,
  server: {
    baseDir: './',
    directory: true
  },

  startPath: 'home.pug',
  middleware: [
    function (req, res, next) {
      if (/(.*?).pug/.test(req.url)) {
        let theReqFile = req.url.replace('/', '').trim().toLowerCase()
        fs.access('scenarios/' + theReqFile, fs.constants.F_OK, (err) => {
          if (!err) {
            let theContent = pug.renderFile('scenarios/' + theReqFile, { pretty: true });
            res.end(theContent)
          } else {
            fs.access('scenarios/components/' + theReqFile, fs.constants.F_OK, (err) => {
              if (!err) {
                let theContent = pug.renderFile('scenarios/components/' + theReqFile, { pretty: true }, (err, result) => {
                  return err ? 'error: ' + err : result
                });
                res.end(theContent)
              } else {
                let theContent = pug.renderFile('scenarios/404.pug', { pretty: true });
                res.end(theContent)
              }
            });
          }
        });
      }
      next();
    }
  ]
})

bs.watch("src/scss/**/*.scss", function (event, file) {
  if (event === "change") {
    setTimeout(() => {
      sass.render({
        file: sass_input,
        sourceMap: false
      }, function (err, res) {
        if (!err) {
          postcss([autoprefixer]).process(res.css, { from: 'undefined' }).then(result => {
            fs.writeFile("dist/css/uipack.css", result, () => true)
          })
        } else console.log(err)

      })
    }, 400)
  }
});
