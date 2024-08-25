import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { Background } from '@/core/components/background/background'
import { Button } from '@/components/ui/button'
import { Link } from '@/core/components/link/link'
import { ArrowLeft } from 'lucide-react'

export const NotFound: FC = () => {
  const t = useTranslations()

  return (
    <Background className="w-screen h-screen">
      <div className="wrapper">
        <h1 className="mb-4">{t.rich('common.notFound.title')}</h1>
        <p className="mb-4">{t.rich('common.notFound.caption')}</p>
        <Link type="invisible" to="/">
          <Button className="mb-4">
            <ArrowLeft />
            {t('common.notFound.back')}
          </Button>
        </Link>
      </div>
    </Background>
  )
}
