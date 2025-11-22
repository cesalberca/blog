import { existsSync, readdirSync } from 'node:fs'

export function getSlugs(path: string) {
  if (!existsSync(path)) {
    return []
  }
  return readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .filter((x) => {
      if (process.env.NODE_ENV === 'development') {
        return true
      }

      return !x.name.startsWith('_')
    })
}
