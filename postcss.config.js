module.exports = (api) => {
  const isProduction = api.env === 'production';

  const plugins = {
    'postcss-import': {},
    'precss': {}
  };

  isProduction && Object.assign(plugins, {
    'css-mqpacker': {},
    'autoprefixer': {},
    'cssnano': {}
  });

  return {
    plugins
  };
};
