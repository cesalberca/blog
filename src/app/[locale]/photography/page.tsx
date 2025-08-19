import { PhotographyPage } from '@/features/photography/delivery/photography.page'
import type { Photo } from '@/features/photography/domain/photo'
import { list } from '@vercel/blob'

async function getPhotos(): Promise<Photo[]> {
  const response = await list({ prefix: 'photography' })

  return response.blobs.map(blob => ({
    src: blob.url,
    alt: blob.pathname.split('/').pop()?.split('.')[0].replace(/-/g, ' ') || '',
    // These will be overridden by the next/image component
    width: 0,
    height: 0,
  }))
}

export default async function Page() {
  const photos = await getPhotos()
  return <PhotographyPage photos={photos} />
}
