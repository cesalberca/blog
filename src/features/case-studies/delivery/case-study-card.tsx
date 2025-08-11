import type { FC } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'

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
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${image})`,
              filter: 'brightness(0.3)',
            }}
          />
        )}
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl mb-4">{title}</CardTitle>
          <CardDescription className={cn('text-lg', image && 'text-gray-200')}>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
