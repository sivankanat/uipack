const _log = (data) => console.log(data);
const packageJson = require("../package.json");
const banner = `/**! UIPack ${packageJson.version} | https://github.com/sivankanat/uipack#readme | MIT */\n`;

/* pack */
const fs = require("fs"),
  bs = require("browser-sync").create("UIPack"),
  pug = require("pug"),
  ejs = require("ejs"),
  sass = require("node-sass"),
  postcss = require("postcss"),
  autoprefixer = require("autoprefixer"),
  rollup = require("rollup"),
  comonjs = require("@rollup/plugin-commonjs"),
  { babel } = require("@rollup/plugin-babel"),
  { nodeResolve } = require("@rollup/plugin-node-resolve");

/* bs */
bs.init({
  files: [
    "dist/css/uipack.css",
    "docs/css/docs.css",
    "docs/js/docs.js",
    "**/*.html",
  ],
  port: 9000,
  ui: false,
  server: {
    baseDir: ".",
    directory: false,
  },
  startPath: "docs",
  open: false,
});

// pug
/* bs.watch('docs/pug/*.pug', function (event, file) {
  //events: unlink, add, change
  filename = file.replace('docs\\pug\\', '').replace('.pug', '').trim().toLowerCase();
  if (!file.includes('includes')) {
    if (event == 'change') {
      setTimeout(() => {
        pug.renderFile(`docs/pug/${filename}.pug`, { pretty: true }, function (err, res) {
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
}) */

// ejs
bs.watch("docs/ejs/pages/*.ejs", function (event, file) {
  //events: unlink, add, change
  filename = file
    .replace("docs\\ejs\\pages\\", "")
    .replace(".ejs", "")
    .trim()
    .toLowerCase();

  if (event == "change") {
    setTimeout(() => {
      ejs.renderFile(`docs/ejs/pages/${filename}.ejs`, {}, function (err, str) {
        // str => Rendered HTML string
        err
          ? _log(err)
          : fs.writeFileSync(`docs/${filename}.html`, str, () => true);
        _log(`${filename} changed`);
      });
    }, 70);
  }

  if (event == "unlink") {
    fs.unlink(`docs/${filename}.html`, function (err) {
      err ? _log(err) : _log(`unlink: ${file} -> docs/${filename}.html`);
    });
  }
});

const renderScss = (source, out) => {
  setTimeout(() => {
    sass.render(
      {
        file: source,
        outFile: out,
        sourceMap: true,
      },
      (err, res) => (err ? _log(err) : pcss(res))
    );
  }, 100);
  let pcss = (result) => {
    postcss([autoprefixer])
      .process(result.css, { from: source, to: out })
      .then((result) =>
        fs.writeFile(out, banner + result.css, (err) =>
          err ? _log(err) : _log(`${source} => ${out}`)
        )
      );
  };
};

// watch sass
bs.watch("src/scss/**/*.scss", function (event, file) {
  if (event == "change") {
    renderScss("src/scss/uipack.scss", "dist/css/uipack.css");
    renderScss("docs/css/docs.scss", "docs/css/docs.css");
  }
});

bs.watch("docs/css/**/*.scss", function (event, file) {
  if (event == "change") {
    renderScss("docs/css/docs.scss", "docs/css/docs.css");
  }
});

// watch js
bs.watch("src/js/**/*.js", function (event, file) {
  if (event == "change") {
    (async () => {
      const bundle = await rollup.rollup({
        input: "src/js/uipack.js",
        plugins: [
          nodeResolve(),
          comonjs(),
          babel({
            babelHelpers: "bundled",
          }),
        ],
      });
      await bundle.write({
        file: "dist/js/uipack.js",
        format: "umd",
        banner: banner,
        amd: {
          id: "UIPack",
        },
        name: "UIPack",
      });
      await bundle.close();
      console.log(`${file} changed`);
    })();
  }
});

// watch docs js
bs.watch("docs/js/src/**/*.js", function (event, file) {
  if (event === "change") {
    (async () => {
      const bundle = await rollup.rollup({
        input: "docs/js/src/docs.js",
        plugins: [
          nodeResolve(),
          babel({
            babelHelpers: "bundled",
          }),
          comonjs(),
        ],
      });
      await bundle.write({
        file: "docs/js/docs.js",
        format: "cjs",
      });
      await bundle.close();
      console.log(`${file} changed`);
    })();
  }
});
