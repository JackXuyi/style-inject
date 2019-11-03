module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: 'last 10 versions, > 1%, ie >= 9, Android >= 4.4, iOS >= 8',
          node: '0.10',
        },
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ]
  const plugins = []

  return {
    presets,
    plugins,
  }
}
