module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-empty': [ 'error', { allowEmptyCatch: true }],
    'no-else-return': [ 'error' ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'indent': [ 'error', 2 ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'linebreak-style': [ 'error', 'unix' ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    'quotes': [
      'error',
      'single',
      {

        allowTemplateLiterals: true
      }
    ],
    'semi': [ 'error', 'never' ],
    'semi-spacing': [ 'error', { before: false, after: true }],
    'arrow-spacing': [ 'error', {
      'after': true,
      'before': true
    }],
    'no-duplicate-imports': 'error',
    'no-var': [ 'error' ],
    'object-shorthand': [ 'error', 'always', {
      'avoidQuotes': true,
      'ignoreConstructors': false
    }],
    'prefer-arrow-callback': [ 'error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    'prefer-rest-params': [ 'error' ],
    'no-fallthrough': 'off'
  }
}
