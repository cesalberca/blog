module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/typescript'],
  rules: {
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
