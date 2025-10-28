import createNextIntlPlugin from 'next-intl/plugin'
import withMDX from '@next/mdx'
import type { NextConfig } from 'next'
import { withBotId } from 'botid/next/config'

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.tsx')

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ protocol: 'https', port: '', hostname: 'sxvlta3onkp6zlqr.public.blob.vercel-storage.com' }],
  },
  experimental: {
    mdxRs: true,
  },
  async rewrites() {
    return [
      {
        source: '/talks/freelancing-with-ai',
        destination: '/talks/freelancing-with-ai/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/chat',
        destination: 'https://calendar.app.google/KvZAYd9okNjiY7iBA',
        permanent: true,
      },
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1NuWgWSZWU2axtO_P8xOpTYTWfG5XptAY/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/articles/:path*',
        destination: '/blog/:path*',
        permanent: false,
      },
    ]
  },
}

export default withBotId(withMDX()(withNextIntl(nextConfig)))
