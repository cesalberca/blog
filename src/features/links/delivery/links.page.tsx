import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Page } from '../../../core/components/page/page'
import { Link } from '../../../core/components/link/link'
import Image from 'next/image'
import instagram from '../../../../public/assets/icons/instagram.svg'
import x from '../../../../public/assets/icons/x.svg'
import youtube from '../../../../public/assets/icons/youtube.svg'
import github from '../../../../public/assets/icons/github.svg'
import tiktok from '../../../../public/assets/icons/tiktok.svg'
import linkedin from '../../../../public/assets/icons/linkedin.svg'
import email from '../../../../public/assets/icons/email.svg'

const links = [
  {
    title: 'Instagram',
    url: 'https://instagram.com/cesalberca',
    icon: instagram,
  },
  {
    title: 'X',
    url: 'https://x.com/cesalberca',
    icon: x,
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@cesalberca',
    icon: tiktok,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@cesalberca',
    icon: youtube,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cesalberca',
    icon: linkedin,
  },
  {
    title: 'Github',
    url: 'https://github.com/cesalberca',
    icon: github,
  },
]

export const LinksPage: FC = () => {
  const t = useTranslations()
  return (
    <Page>
      <h1>{t('links.title')}</h1>
      <section>
        {links.map(x => (
          <div key={x.title}>
            <Image src={x.icon} alt={x.title} height={20} />
            <Link type={'navigation'} to={x.url}>
              {x.title}
            </Link>
          </div>
        ))}
        <div>
          <Image src={email} alt={'Email'} height={20} />
          <Link type={'navigation'} to={'mailto:cesar@cesalberca.com'}>
            Email
          </Link>
        </div>
      </section>
    </Page>
  )
}
