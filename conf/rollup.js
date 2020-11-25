import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import comonjs from '@rollup/plugin-commonjs';
const file_basename = 'uipack';
const pjson = require("../package.json");

export default {
  input: 'src/js/' + file_basename + '.js',
  output: {
    file: 'dist/js/' + file_basename + '.js',
    format: 'umd',
    amd: {
      id: "UIPack"
    },
    banner: "/*! UIPack " + pjson.version + " | https://github.com/sivankanat/uipack#readme | MIT */",
    name: file_basename
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "runtime"
    }),
    comonjs()
  ]
};