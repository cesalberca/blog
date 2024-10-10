import type { FC } from 'react'
import { Page } from '../../../core/components/page/page'
import { Link } from '../../../core/components/link/link'
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiStackoverflow,
  SiTiktok,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import { Mail, Mic } from 'lucide-react'
import { Card } from '@/components/ui/card'

const links = [
  {
    title: 'Instagram',
    url: 'https://instagram.com/cesalberca',
    icon: SiInstagram,
  },
  {
    title: 'X',
    url: 'https://x.com/cesalberca',
    icon: SiX,
  },
  {
    title: 'Podcast',
    url: 'https://coliversclub.com/',
    icon: Mic,
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@cesalberca',
    icon: SiTiktok,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@cesalberca',
    icon: SiYoutube,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cesalberca',
    icon: SiLinkedin,
  },
  {
    title: 'Github',
    url: 'https://github.com/cesalberca',
    icon: SiGithub,
  },
  {
    title: 'StackOverflow',
    url: 'https://stackoverflow.com/users/6475656/césar-alberca',
    icon: SiStackoverflow,
  },
  {
    title: 'Email',
    url: 'mailto:cesar@cesalberca.com',
    icon: Mail,
  },
]

export const LinksPage: FC = () => {
  return (
    <Page>
      <section className="wrapper flex flex-col gap-m items-center my-l">
        <div className="flex flex-col gap-m">
          {links.map(x => (
            <Card key={x.title} className="flex gap-s py-s px-l">
              <x.icon />
              <Link type={'invisible'} to={x.url}>
                {x.title}
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </Page>
  )
}
