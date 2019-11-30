module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['./tests/set-up.ts'],
  coverageReporters: ['lcov', 'text-summary'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
}
