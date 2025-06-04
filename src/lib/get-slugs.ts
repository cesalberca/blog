import { readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'

export async function getSlugs(path: string) {
  if (!existsSync(path)) {
    return []
  }
  return (await readdir(path, { withFileTypes: true })).filter(dirent => dirent.isDirectory())
}
