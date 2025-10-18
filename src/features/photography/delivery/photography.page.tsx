'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { Page } from '@/core/components/page/page'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import type { Photo } from '@/features/photography/domain/photo'

interface Props {
  photos: Photo[]
}

export const PhotographyPage: FC<Props> = ({ photos }) => {
  const t = useTranslations()
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <Page>
      <h1 className="wrapper my-4">
        <AccentText>{t('photography.title')}</AccentText>
      </h1>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {photos.map(photo => (
          <div
            key={photo.src}
            className="relative aspect-[9/16] overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-foreground text-sm">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent
          className="max-w-none w-screen h-screen p-0 border-none bg-black"
          aria-describedby="photo-description"
        >
          {selectedPhoto && (
            <div className="relative w-full h-full flex items-center justify-center">
              <DialogTitle className="absolute top-4 left-4 text-foreground z-10 text-lg">
                {selectedPhoto.alt}
              </DialogTitle>
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Page>
  )
}
