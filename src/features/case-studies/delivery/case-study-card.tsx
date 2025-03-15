import type { FC } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'

interface CaseStudyCardProps {
  title: string
  description: string
  href: string
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ title, description, href }) => {
  return (
    <Link to={href} type="invisible">
      <Card className="h-full p-8">
        <CardHeader>
          <CardTitle className="text-2xl mb-4">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
