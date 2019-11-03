import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import importAlias from 'rollup-plugin-import-alias'
import packageJson from './package.json'

const copyright = `/*
 * Copyright ${new Date().getFullYear()}, ${packageJson.author}.
 * Copyrights licensed under the MIT License.
 */
`

export default {
  input: 'src/index.ts',
  output: {
    name: 'i18n',
    file: packageJson.main,
    format: 'umd',
    banner: copyright,
    exports: 'named',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.ts'],
    }),
    importAlias({
      Extensions: ['js', 'ts'],
    }),
    json(),
    globals(),
    builtins(),
    babel({
      extensions: ['.js', '.ts'],
      runtimeHelpers: true,
      exclude: ['node_modules/**'],
    }),
  ],
}
