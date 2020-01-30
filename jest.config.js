module.exports = {
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js'
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['./tests/set-up.ts'],
  coverageReporters: ['lcov', 'text-summary'],
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue']
}
