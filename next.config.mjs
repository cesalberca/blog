/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/articles/:path*',
        destination: '/blog/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
