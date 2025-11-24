"use client";

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ImageData {
  src: string;
  alt: string;
}

export const ImageGrid: FC<{ images: ImageData[] }> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen || !carouselApi) return;
    carouselApi.scrollTo(currentImageIndex, true);
  }, [lightboxOpen, carouselApi, currentImageIndex]);

  return (
    <div className="not-prose">
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Button
            key={image.src}
            variant="invisible"
            type="button"
            className="relative aspect-video cursor-pointer w-full h-full"
            onClick={() => openLightbox(index)}
            aria-label={image.alt}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-lg m-0"
            />
          </Button>
        ))}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-none w-screen h-screen p-0 border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>{images?.[currentImageIndex]?.alt}</DialogTitle>
          </DialogHeader>

          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={(api) => setCarouselApi(api)}
          >
            <CarouselContent className="w-full h-full">
              {images.map((img) => (
                <CarouselItem key={img.src} className="w-full h-full relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="z-10 left-2" />
            <CarouselNext className="z-10 right-2" />
          </Carousel>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw]">
            <div className="flex items-center gap-2">
              {images.map((img, idx) => (
                <Button
                  variant="invisible"
                  key={`thumb-${img.src}`}
                  type="button"
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    carouselApi?.scrollTo(idx);
                  }}
                  className={
                    "relative w-20 h-14 ring-offset-2 focus:outline-none focus-visible:ring-2 " +
                    (idx === currentImageIndex
                      ? "ring-2 ring-primary"
                      : "ring-0")
                  }
                  aria-label={img.alt}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
