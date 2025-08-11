import React, { FC } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'
import Image from 'next/image'

interface CaseStudyCardProps {
  title: string
  description: string
  href: string
  image?: string
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ title, description, href, image }) => {
  return (
    <Link to={href} type="invisible">
      <Card className={cn('h-full p-8 relative overflow-hidden', image && 'text-white')}>
        {image && (
          <div className="[aspect-ratio:3/2]">
            <Background image={image}></Background>
          </div>
        )}
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl mb-4">{title}</CardTitle>
          <CardDescription className={cn('text-lg', image && 'text-gray-200')}>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
