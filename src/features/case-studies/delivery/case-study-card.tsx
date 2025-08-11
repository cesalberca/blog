import React, { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'
import { Markdown } from '@/core/components/markdown/markdown'

interface CaseStudyCardProps {
  title: string
  description: string
  href: string
  image: string
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ title, description, href, image }) => {
  return (
    <Link to={href} type="invisible">
      <Card className={cn('h-full relative overflow-hidden')}>
        <div className="[aspect-ratio:3/2]">
          <Background image={image}>
            <CardHeader>
              <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Markdown className={cn('text-xl')} value={description} />
            </CardContent>
          </Background>
        </div>
      </Card>
    </Link>
  )
}
