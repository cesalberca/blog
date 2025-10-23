import { type FC } from 'react'
import { Link } from '@/core/components/link/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'

interface Props {
  title: string
  description?: string
  href: string
  image?: string
  className?: string
}

export const SecondaryCard: FC<Props> = ({ title, description, href, image, className = '' }) => {
  return (
    <Link href={href} type="invisible" className={className}>
      <Card className={cn('h-full relative overflow-hidden')}>
        <Background image={image ?? ''}>
          <CardHeader>
            <CardTitle className="text-base lg:text-sm text-center">{title}</CardTitle>
          </CardHeader>
          {description && <CardContent>{description}</CardContent>}
        </Background>
      </Card>
    </Link>
  )
}
