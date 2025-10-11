'use client'

import React, { type FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Link } from '@/core/components/link/link'
import { useTranslations } from 'next-intl'
import Autoplay from 'embla-carousel-autoplay'

interface Testimonial {
  name: string
  role: string
  link: string
  content: string
  avatar: string
}

interface TestimonialsProps {
  itemsPerPage?: number
}

export const Testimonials: FC<TestimonialsProps> = ({ itemsPerPage = 1 } = { itemsPerPage: 1 }) => {
  const t = useTranslations('home.testimonials')

  const testimonials: Testimonial[] = [
    {
      name: t('carlos.name'),
      role: t('carlos.role'),
      link: t('carlos.link'),
      content: t('carlos.content'),
      avatar: '/assets/images/testimonials/carlos-ble.jpeg',
    },
    {
      name: t('isabel.name'),
      role: t('isabel.role'),
      link: t('isabel.link'),
      content: t('isabel.content'),
      avatar: '/assets/images/testimonials/isabel-rodriguez.jpeg',
    },
    {
      name: t('adrian.name'),
      role: t('adrian.role'),
      link: t('adrian.link'),
      content: t('adrian.content'),
      avatar: '/assets/images/testimonials/adrian-ferrera.jpeg',
    },
    {
      name: t('francisco.name'),
      role: t('francisco.role'),
      link: t('francisco.link'),
      content: t('francisco.content'),
      avatar: '/assets/images/testimonials/francisco-picolini.jpeg',
    },
    {
      name: t('alberto.name'),
      role: t('alberto.role'),
      link: t('alberto.link'),
      content: t('alberto.content'),
      avatar: '/assets/images/testimonials/alberto-chamorro.jpeg',
    },
    {
      name: t('german.name'),
      role: t('german.role'),
      link: t('german.link'),
      content: t('german.content'),
      avatar: '/assets/images/testimonials/german-delgado.jpeg',
    },
    {
      name: t('antonio.name'),
      role: t('antonio.role'),
      link: t('antonio.link'),
      content: t('antonio.content'),
      avatar: '/assets/images/testimonials/antonio-cobo.jpeg',
    },
  ]

  const getItemBasisClass = (itemsPerPage: number) => {
    switch (itemsPerPage) {
      case 1:
        return 'md:basis-full'
      case 2:
        return 'md:basis-1/2'
      case 3:
        return 'md:basis-1/3'
      case 4:
        return 'md:basis-1/4'
      default:
        return 'md:basis-1/3'
    }
  }

  const itemBasisClass = getItemBasisClass(itemsPerPage)

  return (
    <div className="md:wrapper">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-sm mx-auto md:max-w-4xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className={`pl-2 md:pl-4 ${itemBasisClass}`}>
              <Card>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="text-lg mb-4">&ldquo;{testimonial.content}&rdquo;</blockquote>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="font-semibold not-italic">
                        {<Link href={testimonial.link}>{testimonial.name}</Link>}
                      </cite>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}
