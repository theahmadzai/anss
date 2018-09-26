module.exports = (api) => {
  const isProduction = api.env === 'production'

  let plugins = {
    'postcss-import': {},
    'precss': {}
  }

  isProduction && [
    'css-mqpacker',
    'autoprefixer',
    'cssnano'
  ].forEach(plugin => plugins[plugin] = {})

  return {
    map: !isProduction ? 'inline' : false,
    plugins
  }
}
