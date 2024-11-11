import createNextIntlPlugin from 'next-intl/plugin'
import withMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.tsx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
