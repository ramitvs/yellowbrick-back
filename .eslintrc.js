module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'plugin:vue/essential', 'plugin:gridsome/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue', 'gridsome'],
  rules: {
    'space-before-function-paren': off
  }
}
