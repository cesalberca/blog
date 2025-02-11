import { PhotographyPage } from '@/features/photography/delivery/photography.page'
import fs from 'fs'
import path from 'path'
import { Photo } from '@/features/photography/domain/photo'

function getPhotos(): Photo[] {
  const photosDir = path.join(process.cwd(), 'public/assets/images/photography')

  // Create directory if it doesn't exist
  if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true })
  }

  const files = fs.readdirSync(photosDir)

  return files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      src: `/assets/images/photography/${file}`,
      alt: file.split('.')[0].replace(/-/g, ' '),
      // These will be overridden by the next/image component
      width: 0,
      height: 0,
    }))
}

export default function Page() {
  const photos = getPhotos()
  return <PhotographyPage photos={photos} />
}
