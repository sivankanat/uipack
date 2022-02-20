const
  packageJson = require("../package.json"),
  banner = `/**! UIPack ${packageJson.version} | https://github.com/sivankanat/uipack#readme | MIT */\n`,
  fs = require("fs"),
  bs = require("browser-sync").create('UIPack'),
  sass = require("node-sass"),
  postcss = require("postcss"),
  autoprefixer = require("autoprefixer"),
  rollup = require("rollup"),
  comonjs = require("@rollup/plugin-commonjs"),
  { babel } = require("@rollup/plugin-babel"),
  { nodeResolve } = require("@rollup/plugin-node-resolve"),
  ejs = require('ejs');


/* bs */
bs.init({
  files: [
    "dist/css/uipack.css",
    "docs/dist/css/docs.css",
    "docs/dist/js/docs.js",
    "docs/**/*.html",
  ],
  port: 9000,
  ui: false,
  server: 'docs',
  open: true,
});

// ejs
bs.watch("docs/src/ejs/*.ejs", function (event, file) {
  //events: unlink, add, change
  filename = file
    .replace("docs\\src\\ejs\\", "")
    .replace(".ejs", "")
    .trim()
    .toLowerCase();

  if (event == "change") {
    setTimeout(() => {
      ejs.renderFile(`docs/src/ejs/${filename}.ejs`, {}, function (err, str) {
        // str => Rendered HTML string
        err
          ? console.log(err)
          : fs.writeFileSync(`docs/${filename}.html`, str, () => true);
        console.log(`${filename} changed`);
      });
    }, 100);
  }

  if (event == "unlink") {
    fs.unlink(`docs/${filename}.html`, function (err) {
      err ? console.log(err) : console.log(`unlink: ${file} -> docs/${filename}.html`);
    });
  }
});


const renderSass = function (srcfile, distfile) {
  setTimeout(() => {
    sass.render({
      file: srcfile,
      outFile: distfile,
      sourceMap: true,
    }, function (err, result) {
      if (err) { console.log(err) } else {
        postcss([autoprefixer])
          .process(result.css, { from: srcfile, to: distfile })
          .then((result) => fs.writeFile(distfile, banner + result.css, (err) => err ? console.log(err) : console.log(`${srcfile} => ${distfile}`))
          );
      };
    });
  }, 200);
}


// scss
bs.watch('src/scss/**/*.scss', function (event, file) {
  if (event == 'change') {
    renderSass("src/scss/uipack.scss", "dist/css/uipack.css");
    renderSass("docs/src/scss/docs.scss", "docs/dist/css/docs.css");
  }
})

bs.watch('docs/src/scss/**/*.scss', function (event, file) {
  if (event == 'change') {
    renderSass("docs/src/scss/docs.scss", "docs/dist/css/docs.css");
  }
})


const renderJS = async function (srcfile, distfile, file) {
  const bundle = await rollup.rollup({
    input: srcfile,
    plugins: [
      nodeResolve(),
      comonjs(),
      babel({
        babelHelpers: "bundled",
      }),
    ],
  });
  await bundle.write({
    file: distfile,
    format: "umd",
    banner: banner,
    amd: {
      id: "UIPack",
    },
    name: "UIPack",
  });
  await bundle.close();
  console.log(`${file} changed`);

}

// watch js
bs.watch("src/js/**/*.js", function (event, file) {
  if (event == "change") {
    renderJS("src/js/uipack.js", "dist/js/uipack.js", file)
    renderJS("docs/src/js/docs.js", "docs/dist/js/docs.js", file)
  }
});

bs.watch("docs/src/js/**/*.js", function (event, file) {
  if (event == "change") {
    renderJS("docs/src/js/docs.js", "docs/dist/js/docs.js", file)
  }
});