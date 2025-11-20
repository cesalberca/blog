const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFiles: ['./test/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
}

module.exports = createJestConfig(customJestConfig)
