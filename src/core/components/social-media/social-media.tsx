import type { FC } from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiStackoverflow, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import { Link } from '@/core/components/link/link'

export const SocialMedia: FC = () => {
  const socialMedia = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cesalberca', icon: SiLinkedin },
    { name: 'GitHub', url: 'https://github.com/cesalberca', icon: SiGithub },
    { name: 'StackOverflow', url: 'https://stackoverflow.com/users/6475656/césar-alberca', icon: SiStackoverflow },
    { name: 'X', url: 'https://x.com/cesalberca', icon: SiX },
    { name: 'Instagram', url: 'https://instagram.com/cesalberca', icon: SiInstagram },
    { name: 'YouTube', url: 'https://www.youtube.com/@cesalberca', icon: SiYoutube },
  ]

  return (
    <div className="flex gap-6 flex-wrap">
      {socialMedia.map(({ name, url, icon: Icon }) => (
        <Link key={name} href={url} type="invisible">
          <Icon size={16} aria-label={name} title={name}></Icon>
        </Link>
      ))}
    </div>
  )
}
