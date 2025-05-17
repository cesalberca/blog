import createNextIntlPlugin from 'next-intl/plugin'
import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.tsx')

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ protocol: 'https', port: '', hostname: 'sxvlta3onkp6zlqr.public.blob.vercel-storage.com' }],
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
        source: '/articles/:path*',
        destination: '/blog/:path*',
        permanent: false,
      },
    ]
  },
}

export default withMDX()(withNextIntl(nextConfig))
