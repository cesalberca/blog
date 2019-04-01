module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.md$': 'jest-transform-stub',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    },
    require: {
      context: true
    }
  },
  setupFiles: ['./tests/setUp.ts'],
  coverageReporters: ['lcov', 'text-summary']
}
