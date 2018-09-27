module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: ['html'],
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'keyword-spacing': ['error'],
    'camelcase': ['error', { properties: 'never' }],
    'no-var': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'warn',
    'no-debugger': 'error',
  },
  globals: {}
}
