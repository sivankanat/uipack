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
  packageJson = require("../package.json")
  ;

bs.init({
  files: [
    "dist/css/uipack.css",
    "docs/css/app.css"
  ],
  port: 9000,
  server: {
    baseDir: './',
    directory: false
  },
  startPath: 'docs',
  open: true
})

// pug
bs.watch('scenarios/*.pug', function (event, file) {
  //events: unlink, add, change
  /* console.log(`Browsersync[event: ${event} file: ${file}]`); */
  filename = file.replace('scenarios\\', '').replace('.pug', '').trim().toLowerCase();
  if (!file.includes('includes')) {
    if (event == 'change') {
      setTimeout(() => {
        pug.renderFile(`scenarios/${filename}.pug`, { pretty: true }, function (err, res) {
          if (err) console.log(err);
          else {
            fs.writeFileSync(`docs/${filename}.html`, res, () => true)
            console.log(`change: ${file} -> docs/${filename}.html`);
            setTimeout(() => bs.reload(), 5);
          }
        });
      }, 70);
    }

    if (event == "unlink") {
      fs.unlink(`docs/${filename}.html`, function (err) {
        if (err) console.log(err);
        else console.log(`unlink: ${file} -> docs/${filename}.html`);
      })
    }
  }
})

// watch sass
bs.watch(["src/scss/**/*.scss", 'docs/css/**/*.scss'], function (event, file) {
  if (event == "change") {

    let source = 'src/scss/uipack.scss';
    let out = 'dist/css/uipack.css'
    if (file.includes('docs')) {
      source = 'docs/css/app.scss';
      out = 'docs/css/app.css';
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
bs.watch("src/js/**/*.js", async function (event, file) {
  if (event == 'change') {
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
    console.log('change: uipack.js');
    await bs.reload();
  }
})

// watch docs js
bs.watch("docs/js/**/*.js", async function (event, file) {
  if (event == 'change') {
    const bundle = await rollup.rollup({
      input: 'docs/js/app.js',
      plugins: [
        babel({
          babelHelpers: "bundled"
        }),
        comonjs()
      ]
    });
    await bundle.write({
      file: 'docs/js/app.bundle.js',
      format: "cjs",
      name: 'uipack'
    });
    console.log(`changed ${file}`);
    await bs.reload();
  }
})
