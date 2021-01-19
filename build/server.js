const
  fs = require('fs'),
  bs = require('browser-sync').create('UIPack'),
  pug = require('pug'),
  sass = require('node-sass'),
  postcss = require('postcss'),
  autoprefixer = require('autoprefixer'),
  rollup = require('rollup'),
  comonjs = require("@rollup/plugin-commonjs"),
  { babel } = require('@rollup/plugin-babel'),
  { nodeResolve } = require('@rollup/plugin-node-resolve'),
  packageJson = require("../package.json")
  ;

bs.init({
  files: [
    "dist/css/uipack.css",
    "scenarios/css/app.css",
    "scenarios/js/app.bundle.js"
  ],
  port: 9000,
  ui: false,
  server: {
    baseDir: './',
    directory: false
  },
  startPath: 'scenarios',
  open: true
})

// pug
bs.watch('scenarios/pug/*.pug', function (event, file) {
  //events: unlink, add, change
  filename = file.replace('scenarios\\pug\\', '').replace('.pug', '').trim().toLowerCase();
  if (!file.includes('includes')) {
    if (event == 'change') {
      setTimeout(() => {
        pug.renderFile(`scenarios/pug/${filename}.pug`, { pretty: true }, function (err, res) {
          if (err) console.log(err);
          else {
            fs.writeFileSync(`scenarios/${filename}.html`, res, () => true)
            console.log(`change: ${file} -> scenarios/${filename}.html`);
            setTimeout(() => bs.reload(), 5);
          }
        });
      }, 70);
    }

    if (event == "unlink") {
      fs.unlink(`scenarios/${filename}.html`, function (err) {
        if (err) console.log(err);
        else console.log(`unlink: ${file} -> scenarios/${filename}.html`);
      })
    }
  }
})

// watch sass
bs.watch(["src/scss/**/*.scss", 'scenarios/css/**/*.scss'], function (event, file) {
  if (event == "change") {

    let source = 'src/scss/uipack.scss';
    let out = 'dist/css/uipack.css'
    if (file.includes('scenarios')) {
      source = 'scenarios/css/app.scss';
      out = 'scenarios/css/app.css';
    }

    setTimeout(() => {
      sass.render({
        file: source,
        sourceMap: false
      }, function (err, res) {
        if (err) console.log(err);
        else {
          postcss([autoprefixer]).process(res.css, { from: 'undefined' }).then(result => {
            fs.writeFile(out, result, function (err) {
              if (err) console.log(err);
              else console.log(`sass: ${file}`);
            })
          })
        }
      })
    }, 200)
  }
});

// watch js
bs.watch("src/js/**/*.js", function (event, file) {
  if (event == 'change') {
    (async () => {
      const bundle = await rollup.rollup({
        input: 'src/js/uipack.js',
        plugins: [
          babel({
            babelHelpers: "runtime"
          }),
          comonjs()
        ]
      });
      await bundle.write({
        file: 'dist/js/uipack.js',
        format: "umd",
        amd: {
          id: "UIPack"
        },
        banner: "/*! UIPack " + packageJson.version + " | https://github.com/sivankanat/uipack#readme | MIT */",
        name: 'uipack'
      });
    })
    console.log('changed: uipack.js');
  }

})

// watch scenarios js
bs.watch("scenarios/js/app.js", function (event, file) {
  if (event == 'change') {
    (async () => {
      const bundle = await rollup.rollup({
        input: 'scenarios/js/app.js',
        plugins: [
          nodeResolve(),
          babel({
            babelHelpers: "bundled"
          }),
          comonjs()
        ]
      });
      await bundle.write({
        file: 'scenarios/js/app.bundle.js',
        format: "cjs",
        name: 'app'
      });
    })()
    console.log(`changed ${file}`);
  }
})
