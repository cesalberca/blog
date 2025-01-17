import createMiddleware from 'next-intl/middleware'
import { routing } from '@/core/i18n/routing'

// Middleware file needs to be placed in `src` root

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
