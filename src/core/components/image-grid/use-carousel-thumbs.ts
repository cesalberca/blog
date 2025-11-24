import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

interface UseCarouselThumbsResult {
  selectedIndex: number
  onThumbClick: (index: number) => void
}

export function useCarouselThumbs(emblaApi: EmblaCarouselType | undefined): UseCarouselThumbsResult {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const onThumbClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  return { selectedIndex, onThumbClick }
}
