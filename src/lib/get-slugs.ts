import { readdir } from 'node:fs/promises'

export async function getSlugs(path: string) {
  return (await readdir(path, { withFileTypes: true })).filter(dirent => dirent.isDirectory())
}
