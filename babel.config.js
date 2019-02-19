module.exports = (api) => {
  const isProduction = api.env('production');

  const presets = [
    '@babel/env'
  ];

  isProduction && presets.concat(...[
    'minify'
  ]);

  return {
    presets
  };
};
