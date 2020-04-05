module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-alert': 'error',
    'no-console': 'error',
    'no-unused-vars': 'off'
  }
}
