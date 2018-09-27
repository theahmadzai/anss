module.exports = (api) => {
  const isProduction = api.env('production')

  let presets = [
    '@babel/env'
  ]

  isProduction && presets.push(...[
    'minify'
  ])

  return {
    presets
  }
}
