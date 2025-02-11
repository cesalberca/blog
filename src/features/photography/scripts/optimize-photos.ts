import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const MAX_WIDTH = 1920 // Maximum width for photos
const QUALITY = 80 // JPEG quality (0-100)

async function optimizePhotos() {
  const photosDir = path.join(process.cwd(), 'public/assets/images/photography')

  if (!fs.existsSync(photosDir)) {
    console.log('Photography directory does not exist')
    return
  }

  const files = fs.readdirSync(photosDir)
  const photoFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))

  console.log(`Found ${photoFiles.length} photos to optimize`)

  for (const file of photoFiles) {
    const filePath = path.join(photosDir, file)
    const tempPath = path.join(photosDir, `temp-${file}`)

    try {
      // Get original metadata and dimensions
      const metadata = await sharp(filePath).metadata()
      const originalSize = fs.statSync(filePath).size

      // Only resize if width is larger than MAX_WIDTH
      const shouldResize = metadata.width ? metadata.width > MAX_WIDTH : false

      // Process image
      const image = sharp(filePath)
      if (shouldResize) {
        image.resize(MAX_WIDTH, null, { fit: 'inside' })
      }

      // Optimize and save
      await image
        .jpeg({
          quality: QUALITY,
          mozjpeg: true,
          chromaSubsampling: '4:4:4',
        })
        .withMetadata() // Preserve metadata
        .toFile(tempPath)

      // Get optimized size
      const optimizedSize = fs.statSync(tempPath).size
      const savings = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1)

      // Replace original with optimized version
      fs.unlinkSync(filePath)
      fs.renameSync(tempPath, filePath)

      console.log(`✓ ${file}:
        ${shouldResize ? `Resized to ${MAX_WIDTH}px width` : 'No resize needed'}
        Reduced from ${(originalSize / 1024 / 1024).toFixed(1)}MB to ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% savings)`)
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath)
      }
    }
  }

  console.log('\nOptimization complete!')
}

// Only run if called directly
if (require.main === module) {
  optimizePhotos().catch(console.error)
}
