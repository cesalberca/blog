'use client'

import { useState } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ImageData {
  src: string
  alt: string
}

export const ImageGrid: FC<{ images: ImageData[] }> = ({ images }) => {
  const t = useTranslations()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (images.length === 0) {
    return null
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <div>
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video cursor-pointer" onClick={() => openLightbox(index)}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-lg m-0"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              onClick={e => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 text-foreground p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            {images[currentImageIndex] && (
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                onClick={e => e.stopPropagation()}
              />
            )}
            <button
              onClick={e => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 text-foreground p-2"
              aria-label={t('common.nextImage')}
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-foreground p-2"
              aria-label={t('common.closeLightbox')}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
