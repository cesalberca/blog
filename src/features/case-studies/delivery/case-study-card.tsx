import type { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@/core/components/link/link'
import { cn } from '@/lib/utils'
import { Background } from '@/core/components/background/background'
import { RichText } from '@/core/components/rich-text/rich-text'
import { getTranslations } from 'next-intl/server'

interface CaseStudyCardProps {
  title: string
  descriptionKey: string
  href: string
  image: string
}

export const CaseStudyCard: FC<CaseStudyCardProps> = async ({ title, descriptionKey, href, image }) => {
  const t = await getTranslations()
  return (
    <Link href={href} type="invisible">
      <Card className={cn('h-full relative overflow-hidden')}>
        <Background image={image}>
          <CardHeader>
            <CardTitle className="text-4xl text-center">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <RichText className="text-base">{(tags) => t.rich(descriptionKey as any, tags)}</RichText>
          </CardContent>
        </Background>
      </Card>
    </Link>
  )
}
