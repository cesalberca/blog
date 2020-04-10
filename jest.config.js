module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '/web_modules/(.*)': '<rootDir>/web_modules/$1'
  },
  setupFiles: ["<rootDir>/tests/set-up.ts"]
}
