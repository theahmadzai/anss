module.exports = (api) => {
  const isProduction = api.env('production')

  let presets = [
    '@babel/env'
  ]

  isProduction && presets.concat(...[
    'minify'
  ])

  return {
    presets
  }
}
