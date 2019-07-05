module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'immortal'],
  rules: {}
};
