import dynamic from 'next/dynamic'

export const SocialLinks = dynamic(() => import('./social-links-dynamic'), { ssr: false })
