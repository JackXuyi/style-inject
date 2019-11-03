import commonjs from 'rollup-plugin-commonjs'
import replace from '@rollup/plugin-replace'

import config from './rollup.config'

// todo: 打包配置优化，开发环境支持 react 新的 hooks
if (config && config.plugins && Array.isArray(config.plugins)) {
  config.plugins = [
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }), // 定义开发环境变量
    commonjs({
      include: 'node_modules/**',
    }),
    ...config.plugins,
  ]
}

// watch 属性
config.watch = {
  // chokidar,
  clearScreen: false,
  exclude: 'node_modules/**',
  include: 'src/**',
}

export default config
