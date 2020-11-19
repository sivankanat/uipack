const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const file_basename = 'uipack';
const inputOptions = {
  input: 'src/js/' + file_basename + '.js',
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
};
const outputOptions = {
  file: 'dist/js/' + file_basename + '.js',
  format: 'cjs',

};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects
  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);
  // or write the bundle to disk
  await bundle.write(outputOptions);
}
build();