import { FlatCompat } from '@eslint/eslintrc'
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
  }),
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['public/talks/**'],
  },
]
