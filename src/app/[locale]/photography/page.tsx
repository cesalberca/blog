import { PhotographyPage } from '@/features/photography/delivery/photography.page'
import type { Photo } from '@/features/photography/domain/photo'
import { list } from '@vercel/blob'

async function getPhotos(): Promise<Photo[]> {
  const response = await list({ prefix: 'photography' })

  // @ts-ignore
  const [ignoreFolder, ...photos] = response.blobs

  return photos.map(blob => {
    const filename = blob.pathname.split('/').pop() ?? ''
    const base = filename.split('.')[0] ?? ''
    const alt = base.replace(/-/g, ' ')

    return {
      src: blob.url,
      alt,
      // These will be overridden by the next/image component
      width: 0,
      height: 0,
    }
  })
}

export default async function Page() {
  const photos = await getPhotos()
  return <PhotographyPage photos={photos} />
}
