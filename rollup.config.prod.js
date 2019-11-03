import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import config from './rollup.config'

if (config && config.plugins && Array.isArray(config.plugins)) {
  config.plugins = [
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }), // 定义生产环境变量
    commonjs({
      include: 'node_modules/**',
    }),
    ...config.plugins,
    terser(), // 压缩代码
  ]
}

export default config
