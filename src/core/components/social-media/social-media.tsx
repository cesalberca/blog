import { type FC } from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiStackoverflow, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export const SocialMedia: FC = () => {
  const socialMedia = [
    { name: 'Instagram', url: 'https://instagram.com/cesalberca', icon: SiInstagram },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cesalberca', icon: SiLinkedin },
    { name: 'StackOverflow', url: 'https://stackoverflow.com/users/6475656/césar-alberca', icon: SiStackoverflow },
    { name: 'X', url: 'https://x.com/cesalberca', icon: SiX },
    { name: 'GitHub', url: 'https://github.com/cesalberca', icon: SiGithub },
    { name: 'YouTube', url: 'https://www.youtube.com/@cesalberca', icon: SiYoutube },
  ]

  return (
    <div className="flex gap-m">
      {socialMedia.map(({ name, url, icon: Icon }) => (
        <Link key={name} target="_blank" href={url}>
          <Icon size={16} aria-label={name} title={name}></Icon>
        </Link>
      ))}
    </div>
  )
}
