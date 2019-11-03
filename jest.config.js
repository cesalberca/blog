module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['./tests/setUp.ts'],
  coverageReporters: ['lcov', 'text-summary']
}
