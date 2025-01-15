import createMiddleware from 'next-intl/middleware'
import { routing } from '@/core/i18n/routing'
import { locales } from '@/core/i18n/locales'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', `/(${locales.join('|')})/:path*`],
}
