import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import comonjs from '@rollup/plugin-commonjs';
const file_basename = 'uipack';

export default {
  input: 'src/js/' + file_basename + '.js',
  output: {
    file: 'dist/js/' + file_basename + '.js',
    format: 'umd',
    amd: {
      id: "UIPack"
    },
    banner: "/*! UIPack 0.1.1-dev.0 | https://github.com/sivankanat/uipack#readme | MIT */",
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