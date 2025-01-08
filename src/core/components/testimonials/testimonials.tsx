'use client'

import React, { type FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Link } from '@/core/components/link/link'

interface Testimonial {
  name: string
  role: string
  link: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Isabel Rodríguez',
    role: 'Business Director, Next Digital',
    link: 'https://www.linkedin.com/in/isabel-rodriguez-olivar-573124b/',
    content: `I had the pleasure of meeting César when he was just starting his career—very young but full of energy and eager to learn. From the beginning, he stood out for his commitment and enthusiasm for sharing his knowledge with others, qualities that have always been his greatest strengths.

Over time, César has become a respected figure in the industry, thanks to his continuous training and dedication to developing high-quality software. He has always been willing to take on every task and project I proposed to him, approaching them with a proactive and collaborative attitude. His ability to take on challenges, along with his generosity in sharing what he knows, make him a valuable professional and an excellent colleague.`,
    avatar: '/assets/images/testimonials/isabel-rodriguez.jpeg',
  },
  {
    name: 'Germán Delgado García',
    role: 'Software Developer, Autentia',
    link: 'https://www.linkedin.com/in/germandelgadogarcia/',
    content:
      'I have had the privilege of working with César, who is a software development reference. His deep knowledge of software architecture and design is impressive. I am very grateful to have had the opportunity to learn a lot from him, both on the job and in the conferences he has given.\n' +
      '\n' +
      'César is curious, funny and intelligent. What stands out most about him is his generosity in sharing his knowledge and experience with others. He is not only a highly skilled professional, but also a person who inspires continuous growth and improvement.\n' +
      '\n' +
      'If you are looking for someone who combines great technical skills with the ability to communicate and teach clearly and effectively, César is the person for you. I am sure he will be a valuable addition to any team.',
    avatar: '/assets/images/testimonials/german-delgado.jpeg',
  },
  {
    name: 'Francisco Picolini',
    role: 'Open Source Community Manager, OpenNebula',
    link: 'https://www.linkedin.com/in/francjp/',
    content:
      'I had the pleasure of collaborating with César during my time managing the Conference content for Codemotion Madrid. César played a crucial role in shaping the agenda, particularly by selecting top-notch frontend proposals, which is his area of expertise. He also contributed beyond this by suggesting innovative topics and recommending talented speakers.\n' +
      '\n' +
      'Not only is César a highly engaging and skilled speaker, but he is also a dedicated team player who consistently goes above and beyond to ensure project success. His deep knowledge of modern frameworks and emerging technologies is impressive, and he has a genuine passion for sharing that expertise with others.\n' +
      '\n' +
      'César is a complete developer—always well-informed, forward-thinking, and eager to contribute to the success of the team. He’s a true asset to any project or organization.',
    avatar: '/assets/images/testimonials/francisco-picolini.jpeg',
  },
  {
    name: 'Alberto Chamorro',
    link: 'https://www.linkedin.com/in/alberto-chamorro/',
    role: 'Flutter Mobile Developer, Calisteniapp',
    content:
      'César is a great person, developer, and colleague with whom I had the pleasure of working at Autentia. During the time I worked with him, he demonstrated strong capabilities in facing various technical challenges, consistently creating effective and creative solutions that always added significant value for the client.\n' +
      '\n' +
      'I can confidently say that César possesses solid knowledge not only in the technological field but also in software architecture and design. Additionally, his hunger for knowledge, combined with his eagerness to share it, makes César a highly valuable asset for any team or challenge he takes on.',
    avatar: '/assets/images/testimonials/alberto-chamorro.jpeg',
  },
  {
    name: 'Carlos Blé',
    link: 'https://www.linkedin.com/in/carlosble/',
    role: 'Life and Executive Coach, LeanMind',
    content:
      'César is a kind and friendly person with a great sense of humor, and, of course, he is an excellent professional. Highly intelligent, very capable, and extremely hardworking. Years ago, I had the chance to have him as an outstanding student in several of my courses, and I was impressed by his ability and eagerness to learn. César is a professional with common sense and exceptional technical quality.',
    avatar: '/assets/images/testimonials/carlos-ble.jpeg',
  },
  {
    name: 'Antonio Cobo Cuenca',
    role: 'Agile Coach, Cognizant',
    link: 'https://www.linkedin.com/in/antoniocobocuenca/',
    content:
      'César and I served on a conference program committee together for several years. I consistently relied on his deep understanding of the latest trends in the Front End world. During our discussions about improving the conference, I was impressed by his critical thinking skills and his ability to see the big picture. César considers every angle of a problem and consistently finds the right solution.',
    avatar: '/assets/images/testimonials/antonio-cobo.jpeg',
  },
]

interface TestimonialsProps {
  itemsPerPage?: number
}

export const Testimonials: FC<TestimonialsProps> = ({ itemsPerPage = 1 } = { itemsPerPage: 1 }) => {
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
    <div className="container">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-sm mx-auto md:max-w-4xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className={`pl-2 md:pl-4 ${itemBasisClass}`}>
              <Card className="h-full">
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
                        {<Link to={testimonial.link}>{testimonial.name}</Link>}
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
