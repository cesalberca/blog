import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Background } from '@/core/components/background/background'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'
import { ArrowLeft } from 'lucide-react'
import { RichText } from '@/core/components/rich-text/rich-text'

export const NotFound: FC = () => {
  const t = useTranslations()

  return (
    <Background className="w-screen h-screen">
      <div className="wrapper">
        <h1 className="mb-4">
          <RichText>{tags => t.rich('common.notFound.title', tags)}</RichText>
        </h1>
        <div className="mb-4">
          <RichText>{tags => t.rich('common.notFound.caption', tags)}</RichText>
        </div>
        <Button className="mb-4" asChild>
          <Link type="invisible" href="/">
            <ArrowLeft />
            {t('common.notFound.back')}
          </Link>
        </Button>
      </div>
    </Background>
  )
}
