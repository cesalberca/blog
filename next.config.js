/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
}

module.exports = nextConfig
