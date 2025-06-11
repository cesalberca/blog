import { existsSync, readdirSync } from 'node:fs'

export function getSlugs(path: string) {
  if (!existsSync(path)) {
    return []
  }
  return readdirSync(path, { withFileTypes: true }).filter(dirent => dirent.isDirectory())
}
